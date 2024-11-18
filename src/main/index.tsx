import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { makeCreateHomePageFactory } from './factories/pages/create-home-page-factory';

const Router = () => {
    return (
        <Routes>
          <Route
            path="/"
            Component ={makeCreateHomePageFactory}
          />
        </Routes>
    );
  };
  
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
  
