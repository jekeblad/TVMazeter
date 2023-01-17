import { useEffect, useState } from "react";
export default (key:string) => {

    interface IFavourite{
        id:string;
        payload:IShowPayload;
    }

    interface IShowPayload{
        title:string;
        image:string;
    }

    const [favourites,setFavorites] = useState<IFavourite[]>(JSON.parse(sessionStorage.getItem(key)|| "[]")); 

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(favourites));   
    },[favourites]);

    const toggleFavourite = (id:string, payload:IShowPayload) => {
        var index = favourites.findIndex(f => f.id == id);
        if(index >= 0){
            favourites.splice(index,1);
        }
        else{
            favourites.push({id, payload:payload});
        }
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