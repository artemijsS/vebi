import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { useSSR } from "react-i18next";
import { Provider } from 'react-redux'
import store from '../redux/store';
import App from './App';
import './i18n';
import {CookieNotify, Politics} from "./components";

const AppContainer = () => {
    // @ts-ignore
    // useSSR(window.initialI18nStore, window.initialLanguage);
    return (
        <Provider store={store}>
            <CookieNotify/>
            <Politics/>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
    <AppContainer />
)
