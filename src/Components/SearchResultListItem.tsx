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

    
    const show = props.data.show
    const showId = show.id.toString();
    
    const toggleFavouriteStatusTitle = isFavourite(showId) 
          ? "Remove from favourites" 
          : "Add as favourite";

    const onLinkToDetailsClick:React.MouseEventHandler<HTMLAnchorElement> = (e) =>{ e.preventDefault(); onShowDetails(showId)};

    const ShowTitleContent = <>
      <a title={'show_' + showId} href={"/show/" + showId } onClick={onLinkToDetailsClick}>{show.name} </a>
      <span className="runInfo">{show.premiered?.split("-")[0] ?? ""} - {show.ended?.split("-")[0] || ""} </span>
      <span onClick={() => toggleFavourite(showId)} title={toggleFavouriteStatusTitle}>
        <Star isFilled={isFavourite(showId)}  />
      </span>
    </>;

    return <section className="show">
        <div className="header">
          <h2>{ShowTitleContent}</h2>
        </div>
        <div className="data">
          <img src={show.image?.medium || ""} alt={"image showing the tv show " + show.name}/>
          <div className="info-container">
            <div dangerouslySetInnerHTML={{__html: SanitizeHtmlString(show.summary)}}></div>
          </div>
        </div>
      </section>
}

export default SearchListItem;