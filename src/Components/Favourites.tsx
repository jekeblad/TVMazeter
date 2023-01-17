import { FC } from 'react';
import "./Favourites.scss";
import useFavourites from '../Hooks/favourites'
import Star from './Star';

interface IProps{
    onShowDetails:(id:string) => void 
}

const Favourites:FC<IProps> = (props) => {
    const {onShowDetails} = props;
    const {isFavourite, toggleFavourite, favourites} = useFavourites("shows");
    return <div className="favourites">
        <h1>Favourite shows</h1>
        {favourites.map(f =><section >
        <img alt={"image showing the tv show " + f.payload.title} src={f.payload.image|| ""} />
        <div>
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