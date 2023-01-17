import { FC, PropsWithChildren } from 'react';
import { MazeSearch } from '../Models/MazeAPIModels';
import "./SearchResultListItem.scss";
import Star from './Star';

var sanitizeHtml = require('sanitize-html');

const SanitizeHtmlString = (unsanitized:string) => {
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

    const showId = props.data.show.id.toString();
    
    const toggleFavouriteStatusTitle = isFavourite(props.data.show.id.toString()) 
          ? "Remove from favourites" 
          : "Add as favourite";

    const onLinkToDetailsClick:React.MouseEventHandler<HTMLAnchorElement> = (e) =>{ e.preventDefault(); onShowDetails(showId)};

    const ShowTitleContent = <>
      <a title={'show_' + showId} href={"/show/" + showId } onClick={onLinkToDetailsClick}>{props.data.show.name} </a>
      <span className="runInfo">{props.data.show.premiered?.split("-")[0] ?? ""} - {props.data.show.ended?.split("-")[0] || ""} </span>
      <span onClick={() => toggleFavourite(showId)} title={toggleFavouriteStatusTitle}>
        <Star isFilled={isFavourite(showId)}  />
      </span>
    </>;

    return <section className="show">
        <div className="header">
          <h2>{ShowTitleContent}</h2>
        </div>
        <div className="data">
          <img src={props.data.show.image?.medium || ""} />
          <div className="info-container">
            <div dangerouslySetInnerHTML={{__html: SanitizeHtmlString(props.data.show.summary)}}></div>
          </div>
        </div>
      </section>
}

export default SearchListItem;