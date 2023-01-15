import React, { FC, PropsWithChildren } from 'react';
import { MazeSearch } from '../Models/SearchItemDTO';
import "./SearchListItem.scss";

var sanitizeHtml = require('sanitize-html');


const cleanup = (unsanitized:string) => {
    return sanitizeHtml(unsanitized, {
        allowedTags: [ 'b', 'i', 'em', 'strong', 'a' ],
        allowedAttributes: {
          'a': [ 'href' ]
        }
      });
}

const SearchListItem:FC<PropsWithChildren<{data:MazeSearch.SearchItem}>> = (props:PropsWithChildren<{data:MazeSearch.SearchItem}>) => {
    return <section className="show">
        <div className="section-header">
          <h2>{props.data.show.name}</h2>
        </div>
        <img src={props.data.show.image.medium} />
        <div className="info-container">
          <div dangerouslySetInnerHTML={{__html: cleanup(props.data.show.summary)}}></div>
        </div>
        </section>
}

export default SearchListItem;