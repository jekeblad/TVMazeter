import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./SearchPage.scss";
import SearchResult from './SearchResult';
import ShowDetails from './ShowDetails';
import { useMazeSearch } from '../Hooks/maze';
import SearchBox from './SearchBox';
import useFavourites from '../Hooks/favourites'

interface IProps{ }
const SearchPage:FC<IProps> = (props) => {
    const navigate = useNavigate();

    const [searchTerm,setSearchTerm] = useState("");
    const {searchResult, isSearching, search, isSlow, isError} = useMazeSearch();
    const {isFavourite, toggleFavourite} = useFavourites<any>("shows");
    
    var params = useParams();
    var id:string = params["showId"] || "";
    
    const navigateBack = () => navigate(-1) 

    const onSearch = (value:string) => { 
      setSearchTerm(value); 
      search(value)
    }

    if(!id)
      return <div>
        { isError && <div className="error">Error connecting to TV Maze API</div> }
        <SearchBox onSearchButtonClick={onSearch} initialSearchTerm={searchTerm} />
        { isSearching 
          ? <div className="status">{isSlow ? "Still fetching..." : "Fetching..."}</div>
          : <SearchResult searchResult={searchResult} onShowDetails={(id) => {navigate('/show/' + id )}}  /> 
        }
      </div>
    else 
      return <div className="searchResultContainer">
        <a href="#" className="back" onClick={(e) => { e.preventDefault(); navigateBack(); }}>{"<"} Back</a>
        <ShowDetails showId={id} isFavourite={isFavourite} toggleFavourite={(id,payload ) => toggleFavourite(id, payload)} />
    </div>
}

export default SearchPage;