import React, { FC, PropsWithChildren, useState } from 'react';
import mazeSearch from '../Hooks/mazeSearch';
import useMazeSearch from '../Hooks/mazeSearch';
import SearchListItem from './SearchListItem';
import "./SearchResult.scss";

const SearchResult:FC<PropsWithChildren<{}>> = (props:PropsWithChildren<{}>) => {

    const [searchTerm,setSearchTerm] = useState("");
    const {searchResult, isSearching, search} = useMazeSearch();
    console.log(searchResult);
    return <>
        <div className="searchBoxContainer">
            <input type="text" value={searchTerm} placeholder='Skriv in din söktext här' onChange={(e) => setSearchTerm(e.target.value)}/>
            <button onClick={() => { search(searchTerm);  }}>Skicka</button>
        </div>
        <div className="searchResultContainer">
            {isSearching 
                ? <>Is Searching</>
                : <> { searchResult.map( item => { return <SearchListItem data={item}/> } )}
                        <button className="fetchNext">Fetch next</button>
                    </>
            }
        </div>
    </>
}
export default SearchResult;