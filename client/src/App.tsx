import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UnderConstructionPage, RedirectPage } from './pages';
import setCssProperties from './utils/cssProperties'

setCssProperties();

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path={"/"} element={ <UnderConstructionPage/> }/>
            <Route path={"/facebook"} element={ <RedirectPage page={"https://www.facebook.com/people/VEBI/100089967131850"}/> }/>
            <Route path={"/google"} element={ <RedirectPage page={"https://www.google.lv/search?q=VEBI&ludocid=12898079744506003750&lsig=AB86z5X8CCs4YKjsgQcA8MCJS3qr#lkt=LocalPoiReviews"}/> }/>
            <Route path={"*"} element={ <Navigate to={"/"}/> }/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
