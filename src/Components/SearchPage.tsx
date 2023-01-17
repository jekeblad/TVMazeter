import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./SearchPage.scss";
import SearchResult from './SearchResult';
import ShowDetails from './ShowDetails';
import { useMazeSearch } from '../Hooks/mazeAPI';
import SearchBox from './SearchBox';
import useFavourites from '../Hooks/favourites'

interface IProps{ }
const SearchPage:FC<IProps> = (props) => {
    const navigate = useNavigate();

    const [searchTerm,setSearchTerm] = useState("");
    const {searchResult, isSearching, search, isSlow, isError} = useMazeSearch();
    const {isFavourite, toggleFavourite} = useFavourites("shows");
    
    var params = useParams();
    var id:string = params["showId"] || "";
    
    const navigateBack = () => navigate(-1) 

    const onSearch = (value:string) => {
      if(isSearching)
        return;
      setSearchTerm(value); 
      search(value)
    }

    if(id)
      return <div className="searchResultContainer">
        <button className="back" onClick={(e) => { e.preventDefault(); navigateBack(); }}>{"<< Back"}</button>
        <ShowDetails showId={id} isFavourite={isFavourite} toggleFavourite={(id,payload ) => toggleFavourite(id, payload)} />
      </div>
    else 
      return <>
        { isError && <div className="error">Error connecting to TV Maze API</div> }
        { isSlow && <div className="warning">Communication with the TV Maze API takes a long time</div> }
        <SearchBox onSearchButtonClick={onSearch} initialSearchTerm={searchTerm} isSearching={isSearching} />
        { isSearching && <span className="loader" data-testid="loader"></span>}
        { searchResult && <SearchResult searchResult={searchResult} onShowDetails={(id) => {navigate('/show/' + id )}}  /> }
      </>
      
}

export default SearchPage;