import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, useLocation } from 'react-router-dom'

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
} 
ReactDOM.render(
  <BrowserRouter>
    <Wrapper>
        <App />
     </Wrapper>
  </BrowserRouter>,
  document.getElementById('root')
);
