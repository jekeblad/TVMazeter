import { useState } from "react";
import { useQuery } from "react-query";
import { MazeSearch } from "../Models/SearchItemDTO";
const useMazeSearch = {}
var _searchTerm:string;
export default () => {

    const [isSearching, setIsSearching] = useState(false);
    const [searchResult, setSearchResult] = useState<MazeSearch.SearchItem[]>([]);
    
    // const [searchTerm, setSearchTerm] = useState("");
    const apiUrl = "https://api.tvmaze.com/search/shows?q=";

    

    const {data,refetch, isFetching} = useQuery(_searchTerm , () => {
        return fetch(apiUrl + _searchTerm);
    },{ enabled: false, onSuccess(data) {
        data.json().then((shows:MazeSearch.SearchItem[]) => {
            console.log("Settin search result", shows);
            setSearchResult(shows);
            setIsSearching(false); 
        })
    }, });

    return {
        isSearching : isSearching,
        searchResult,
        search : (searchTerm:string) => {
            _searchTerm = searchTerm;
            refetch();
            setIsSearching(true); 
        }
    }
};