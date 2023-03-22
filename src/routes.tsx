import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage, RedirectPage } from './pages';

export const useRoutes = ():JSX.Element => {

    return (
        <Routes>
            <Route path={"/"} element={ <MainPage/> }/>
            <Route path={"/facebook"} element={ <RedirectPage page={"https://www.facebook.com/vebi.facebook"}/> }/>
            <Route path={"/google"} element={ <RedirectPage page={"https://www.google.com/search?q=VEBI"}/> }/>
            <Route path={"*"} element={ <Navigate to={"/"}/> }/>
        </Routes>
    )
}
