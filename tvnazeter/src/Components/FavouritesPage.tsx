import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./SearchPage.scss";
import SearchResult from './SearchResult';
import ShowDetails from './ShowDetails';
import { useMazeSearch } from '../Hooks/maze';
import SearchBox from './SearchBox';
import useFavourites from '../Hooks/favourites'
import Favourites from './Favourites';

interface IProps{ }
const FavouritesPage:FC<IProps> = (props) => {
    const navigate = useNavigate();
    return <Favourites onShowDetails={(id) => {navigate('/show/' + id )}}  /> 
}

export default FavouritesPage;