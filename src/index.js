import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoadPage from './scripts/page-scripts';
// import dotenv from 'dotenv';

// const dotenv = require('dotenv');
// dotenv.config({ debug: process.env.DEBUG });
// console.log(process.env);
// console.log(process.env.FB_API_KEY);
// console.log(process.env.FB_KEY);


ReactDOM.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('main-page-wrapper')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
console.log("Loading scripts...");
LoadPage();
console.log("Scripts loaded");