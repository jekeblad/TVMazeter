import React, { FC, PropsWithChildren } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import "./Layout.scss";

const ErrorDisplay:FC<FallbackProps> = (props) => {
    return <div className="error">Something went wrong with your application. Please reload the site and try again. If this error keeps appearing clearing your browser cache might help solve the problem</div>
}

const Layout:FC<PropsWithChildren<{}>> = (props:PropsWithChildren<{}>) => {
    return <>
        <Header />
        <div className="content">
            <ErrorBoundary fallbackRender={(p) => <ErrorDisplay {...p} />} onError={(p) => console.error("error", p)}>
                {props.children}
            </ErrorBoundary>
        </div>
    </>
}
export default Layout;