import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Layout.scss";
const Layout:FC<PropsWithChildren<{}>> = (props:PropsWithChildren<{}>) => {

    const navigate = useNavigate();

    const goto = (link:string, e?:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e && e.preventDefault();
        navigate(link);
    }

    return <>
        <header>
            <h1>TVMaz(e)ter</h1>
            <ul className="navigation">
                <li><a href="/search" onClick={(event) => goto("/search", event)}>Search</a></li>
                <li><a href="/favourites" onClick={(event) => goto("/favourites", event)}>Favourites</a></li>
            </ul>
        </header>
        <div className="content">
            {props.children}
        </div>
    </>
}
export default Layout;