import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Layout.scss";
const Layout:FC<PropsWithChildren<{}>> = (props:PropsWithChildren<{}>) => {

    const navigate = useNavigate();

    const _navigate = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, link:string) => {
        e.preventDefault();
        navigate(link);

    }
    return <>
        <header>
            <h1>TVMaz(e)ter</h1>
            <ul className="navigation">
                <li><a href="/search" onClick={(e) => _navigate(e, "/search")}>Search</a></li>
                <li><a href="/favourites" onClick={(e) => _navigate(e, "/favourites")}>Favourites</a></li>
            </ul>
        </header>
        <div className="content">
            {props.children}
        </div>
        </>
}
export default Layout;