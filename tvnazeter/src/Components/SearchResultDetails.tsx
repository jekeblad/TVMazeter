import React, { FC, PropsWithChildren } from 'react';
import { MazeSearch } from '../Models/SearchItemDTO';

const SearchResultDetails:FC<PropsWithChildren<{item:MazeSearch.SearchItem}>> = (props:PropsWithChildren<{}>) => {
    return <div>ResultItem</div>
}
export default SearchResultDetails;