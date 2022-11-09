import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import AuthService from './services/auth2.js';
import HttpClient from './network/http.js';

// const baseURL = process.env.REACT_APP_BASE_URL;
const baseURL = 'https://dutch-server.herokuapp.com';
const httpClient = new HttpClient(baseURL);
const authService = new AuthService(httpClient);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
