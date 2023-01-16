import { FC , useState } from 'react';
import "./SearchBox.scss";

interface IProps{
    
    onSearchButtonClick : (searchTerm:string) => void,
    initialSearchTerm?:string;
}

const SearchResult:FC<IProps> = (props) => {
    const {
        onSearchButtonClick, 
        initialSearchTerm
    } = props;
    
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm ?? "");

    return <>
        <div className="searchBoxContainer">
            <input type="text" value={searchTerm} placeholder='Enter search term here' onChange={(e) => setSearchTerm(e.target.value)}/>
            <button onClick={() => { onSearchButtonClick(searchTerm);  }}>Search</button>
        </div>
    </>
}
export default SearchResult;