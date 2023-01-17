import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useMazeShow } from '../Hooks/mazeAPI';
import "./ShowDetails.scss";
import Star from './Star';

interface IProps{
    showId:string;
    toggleFavourite: (id:string, payload:any) => void, 
    isFavourite : (id:string) => boolean
}

const ShowDetails:FC<IProps> = (props) => {
    
    var sanitizeHtml = require('sanitize-html');

    const cleanup = (unsanitized:string) => {
        return sanitizeHtml(unsanitized, {
            allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
            allowedAttributes: {
              'a': [ 'href' ]
            }
          });
    }

    const { showId,toggleFavourite, isFavourite } = props;
    var {show, isFetching, isError,isSlow} = useMazeShow(showId); 
    return<>
      { isError && <div className="error">Error fetching show from the TV Maze API</div> }
      { isSlow && <div className="warning">Communication with the TV Maze API takes a long time</div> }
      { !isFetching && !isError
      ? <div className="showDetails">
          <section >
            <div className="header">
              <h2>{show.name}<span 
                onClick={() => toggleFavourite(show.id.toString(), {title:show.name, link:show.url} )}
                title={isFavourite(show.id.toString()) 
                  ? "remove favourite" 
                  : "add as favourite"
                }><Star isFilled={isFavourite(show.id.toString())}  /></span></h2>
            </div>
            <div className="data">
              <img src={show.image?.original} />
              <div className="info-container">
              
                <div dangerouslySetInnerHTML={{__html: cleanup(show.summary)}}></div>
                <div className="tags">
                  {(show.genres ?? []).map(g => <span key={g} className="tag">{g}</span>)}
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="header">
              <h2>Cast</h2>
            </div>
            <div>
              <table className="castTable">
                  <tbody>
                    { show._embedded?.cast.map(c => <tr key={c.person.id}>
                        <td><img src={c.person.image?.medium || ""}  alt={"image of " + c.person.name} /></td>
                        <td>{c.person.name}</td>
                        <td> as {c.character.name}</td>
                    </tr>)}
                  </tbody>
                </table>
              </div>
          </section>
        </div>
      : isFetching && !isError && <span data-testid="showLoader" className="loader"></span>
      }
    </>
}
export default ShowDetails;