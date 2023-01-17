import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Favourites from './Favourites';

const FavouritesPage:FC<{}> = () => {
    const navigate = useNavigate();
    return <Favourites onShowDetails={(id) => {navigate('/show/' + id )}}  /> 
}

export default FavouritesPage;