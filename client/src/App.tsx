import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import setCssProperties from './utils/cssProperties';
import { CookieNotify } from './components';
import { useRoutes } from './routes';
import ReactGA from 'react-ga4';

const TRACKING_ID = "G-16M7F4ZJL2";
ReactGA.initialize(TRACKING_ID);

setCssProperties();

function App() {

    const routes: JSX.Element = useRoutes();

    return (
        <>
            <CookieNotify/>
            <BrowserRouter>
              { routes }
            </BrowserRouter>
        </>
    );
}

export default App;
