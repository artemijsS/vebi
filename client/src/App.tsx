import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UnderConstructionPage } from './pages';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path={"/"} element={ <UnderConstructionPage/> }/>
            <Route path={"*"} element={ <Navigate to={"/"}/> }/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
