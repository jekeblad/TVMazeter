import { FC, PropsWithChildren } from 'react';
import { MazeSearch } from '../Models/MazeAPIModels';
import "./SearchResultListItem.scss";
import Star from './Star';


var sanitizeHtml = require('sanitize-html');


const cleanup = (unsanitized:string) => {
    return sanitizeHtml(unsanitized, {
        allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
        allowedAttributes: {
          'a': [ 'href' ]
        }
      });
}
interface IProps{data:MazeSearch.SearchItem, toggleFavourite: (id:string) => void, isFavourite : (id:string) => boolean, onShowDetails:(id:string) => void }
const SearchListItem:FC<PropsWithChildren<IProps>> = (props:PropsWithChildren<IProps>) => {
    
    const {isFavourite, toggleFavourite, onShowDetails} = props;
    
    return <section className="show">
        <div className="header">
          <h2>
            <a href={"/show/" + props.data.show.id.toString() } onClick={(e) =>{ e.preventDefault(); onShowDetails(props.data.show.id.toString())}}>{props.data.show.name} </a>
            <span className="runInfo">{props.data.show.premiered?.split("-")[0] ?? ""} - {props.data.show.ended?.split("-")[0] || ""} </span>
            <span onClick={() => toggleFavourite(props.data.show.id.toString())}
              title={isFavourite(props.data.show.id.toString()) 
                ? "Remove from favourites" 
                : "Add as favourite"
              }><Star isFilled={isFavourite(props.data.show.id.toString())}  /></span></h2>
        </div>
        <div className="data">
          <img src={props.data.show.image?.medium || ""} />
          <div className="info-container">
            <div dangerouslySetInnerHTML={{__html: cleanup(props.data.show.summary)}}></div>
          </div>
        </div>
        </section>
}

export default SearchListItem;