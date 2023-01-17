import { useState } from "react";
import { useQuery } from "react-query";
import { MazeSearch } from "../Models/MazeAPIModels";


const apiUrl_Search = "https://api.tvmaze.com/search/shows?q=";
const apiUrl_Details = "https://api.tvmaze.com/shows/{id}?embed=cast";

var perfomanceTimeout:any;
const useMazeSearch =  () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isSlow, setIsSlow] = useState(false);
    
    const {data,  isLoading, isError } = useQuery([searchTerm] , () => {
        perfomanceTimeout = setTimeout(() => {
            setIsSlow(true);
        }, 3000);
        return fetch(apiUrl_Search + searchTerm).then(data => data.json());
    }, { 
        enabled: !!searchTerm, 
        onError : (error) => {
            console.error(error);
        },
        onSettled : () => {
            clearTimeout(perfomanceTimeout);
            setIsSlow(false);
        } 
    });
       
    return {
        isError,
        isSearching : isLoading,
        searchResult: data as MazeSearch.SearchItem[] || [],
        search : (q:string) => {
            setSearchTerm(q);
        }, isSlow
    };
}

var perfomanceTimeout_single:any;
const useMazeShow = (showId:string) => {
    const [isSlow, setIsSlow] = useState(false);

    const { data, isLoading, isError } = useQuery([showId] , () => {
        perfomanceTimeout_single = setTimeout(() => {
            setIsSlow(true);
        }, 3000);
        return fetch(apiUrl_Details.replace("{id}", showId.toString())).then(data => data.json());
    },{
        onSettled : () => {
            clearTimeout(perfomanceTimeout_single);
            setIsSlow(false);
        }, 
        onError : (error) => {
            console.error(error);
        },
    });
       
    return {
        isSlow,
        isError,
        isFetching : isLoading,
        show : data as MazeSearch.Show
    };
}

export {
    useMazeShow,
    useMazeSearch
}