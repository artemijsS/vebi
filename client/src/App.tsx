import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import setCssProperties from './utils/cssProperties';
import { useRoutes } from './routes';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-255528452-1";
ReactGA.initialize(TRACKING_ID);

setCssProperties();

function App() {

    const routes: JSX.Element = useRoutes();

    return (
      <BrowserRouter>
          { routes }
      </BrowserRouter>
    );
}

export default App;
