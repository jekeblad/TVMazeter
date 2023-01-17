import { FC } from 'react';

import SearchListItem from './SearchResultListItem';
import "./SearchResult.scss";
import useFavourites from '../Hooks/favourites'
import { MazeSearch } from '../Models/MazeAPIModels';

interface IProps{
    searchResult:MazeSearch.SearchItem[],
    onShowDetails : (id:string) => void;
}

const SearchResult:FC<IProps> = (props) => {
    const {searchResult, onShowDetails } = props;
    const {isFavourite, toggleFavourite} = useFavourites("shows");
    const items = searchResult.map( item => <SearchListItem 
        onShowDetails={onShowDetails} 
        isFavourite={isFavourite} 
        key={item.show.id} 
        data={item} 
        toggleFavourite={() => toggleFavourite(item.show.id.toString(), {title:item.show.name, image : item.show.image?.medium })} />);
    return <div className="searchResultContainer">{ items }</div>    
}
export default SearchResult;