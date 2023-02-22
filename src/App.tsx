import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { MainPage, RedirectPage } from './pages';
import './reset.css';
import './App.css'
import setCssProperties from './utils/cssProperties';

if (typeof window !== "undefined")
    setCssProperties()

function App() {

    return (
        <Routes>
            <Route path={"/"} element={ <MainPage/> }/>
            <Route path={"/facebook"} element={ <RedirectPage page={"https://www.facebook.com/people/VEBI/100089967131850"}/> }/>
            <Route path={"/google"} element={ <RedirectPage page={"https://www.google.com/search?q=VEBI"}/> }/>
            <Route path={"*"} element={ <div>NOT FOUND</div> }/>
        </Routes>
    )
}

export default App
