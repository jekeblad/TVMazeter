import { FC } from 'react';
import "./Favourites.scss";
import useFavourites from '../Hooks/favourites'
import Star from './Star';

interface IProps{
    onShowDetails:(id:string) => void 
}

interface IShowPayload{
    title:string;
    image:string;
}

const Favourites:FC<IProps> = (props) => {
    const {onShowDetails} = props;
    const {isFavourite, toggleFavourite, favourites} = useFavourites<IShowPayload>("shows");
    return <div className="favourites">
        <h1>Favourite shows</h1>
        {favourites.map(f =><section className="show">
        <div className="header">
            <img src={f.payload.image|| ""} />
            <h2>
                <a href={"/show/" + f.id.toString() } onClick={(e) =>{ e.preventDefault(); onShowDetails(f.id.toString())}}>{f.payload.title} </a>            
                <span onClick={() => toggleFavourite(f.id, f.payload)}
                title={isFavourite(f.id.toString()) 
                    ? "remove favourite" 
                    : "add as favourite"
                }><Star isFilled={isFavourite(f.id.toString())}  /></span>
            </h2>
        </div>
        </section> )}
    </div>
}
export default Favourites;