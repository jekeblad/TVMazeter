import React, { FC, PropsWithChildren } from 'react';
import "./Layout.scss";
const Layout:FC<PropsWithChildren<{}>> = (props:PropsWithChildren<{}>) => {
    return <>
        <header>
            <h1>TVMazeter</h1>
        </header>
        <div className="content">
            {props.children}
        </div>
        </>
}
export default Layout;