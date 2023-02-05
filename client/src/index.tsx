import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import './reset.css';
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
