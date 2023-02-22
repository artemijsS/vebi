import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

// @ts-ignore
import App from './App'
import { I18nextProvider } from "react-i18next";
// @ts-ignore
import rootReducer from "../redux/reducers/index";
import {CookieNotify, Politics} from "./components";

export function render(i18n, url) {
    const store = createStore(rootReducer, {politics: {politics: ""}} );
    const html = ReactDOMServer.renderToString(
      <I18nextProvider i18n={i18n}>
          <Provider store={store}>
              <CookieNotify/>
              <Politics/>
              <StaticRouter location={url}>
                  <App />
              </StaticRouter>
          </Provider>
      </I18nextProvider>
    )
    return { html }
}
