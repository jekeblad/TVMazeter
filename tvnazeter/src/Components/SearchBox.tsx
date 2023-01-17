import { FC , useState } from 'react';
import "./SearchBox.scss";

interface IProps{
    onSearchButtonClick : (searchTerm:string) => void,
    initialSearchTerm?:string;
    isSearching:boolean;
}

const SearchResult:FC<IProps> = (props) => {
    const {
        onSearchButtonClick, 
        initialSearchTerm,
        isSearching
    } = props;
    
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm ?? "");

    return <>
        <div className="searchBoxContainer">
            <input type="text" value={searchTerm} placeholder='Enter search term here' onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={(e) => e.key == "Enter" && onSearchButtonClick(searchTerm) }/>
            <button onClick={() => { onSearchButtonClick(searchTerm);  }} disabled={isSearching}>{isSearching ? "Searching...": "Search"}</button>
        </div>
    </>
}
export default SearchResult;