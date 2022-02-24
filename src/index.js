import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import StoreProvider from './store';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter } from 'react-router-dom';
import TargetContextProvider from './contexts/TargetContext';


ReactDOM.render(
  <StoreProvider>
    <BrowserRouter>
      <TargetContextProvider>
        <App />
      </TargetContextProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

