import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './pages';

export const useRoutes = ():JSX.Element => {

    return (
        <Routes>
            <Route path={"/"} element={ <MainPage/> }/>
            <Route path={"*"} element={ <Navigate to={"/"}/> }/>
        </Routes>
    )
}
