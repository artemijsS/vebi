import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import setCssProperties from './utils/cssProperties';
import { useRoutes } from './routes';

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
