import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import setCssProperties from './utils/cssProperties';
import { useRoutes } from './routes';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-BQECK9TV3W";
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
