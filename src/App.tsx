import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { MainPage, RedirectPage } from './pages';
import './reset.css';
import './App.css'
import setCssProperties from './utils/cssProperties';
import ReactGA from 'react-ga4';

if (typeof window !== "undefined") {
    const TRACKING_ID = import.meta.env.VITE_GA_ID || "G-YNDBHH9T0M";
    ReactGA.initialize(TRACKING_ID);
    setCssProperties()
}

function App() {

    return (
        <Routes>
            <Route path={"/"} element={ <MainPage/> }/>
            <Route path={"/facebook"} element={ <RedirectPage page={"https://www.facebook.com/vebi.facebook"}/> }/>
            <Route path={"/google"} element={ <RedirectPage page={"https://goo.gl/maps/EjV2GpRoKEuQKeCr7"}/> }/>
            <Route path={"*"} element={ <RedirectPage page={"https://vebi.lv/"}/> }/>
        </Routes>
    )
}

export default App
