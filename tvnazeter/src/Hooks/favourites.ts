import { useEffect, useState } from "react";
export default<T> (key:string) => {

    interface IFavourite<T>{
        id:string;
        payload:T;
    }

    const [favourites,setFavorites] = useState<IFavourite<T>[]>(JSON.parse(sessionStorage.getItem(key)|| "[]")); 

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(favourites));   
    },[favourites]);

    const toggleFavourite = (id:string, payload:T) => {
        console.log("before",favourites);
        var index = favourites.findIndex(f => f.id == id);
        if(index >= 0){
            favourites.splice(index,1);
        }
        else{
            favourites.push({id, payload:payload});
        }
        console.log("after", favourites);
        setFavorites([...favourites]);
    };
    const isFavourite = (id:string) => {
        return favourites.findIndex(f => f.id == id) >= 0;
    }
    
    return {
       toggleFavourite,
       isFavourite, 
       favourites
    }
};