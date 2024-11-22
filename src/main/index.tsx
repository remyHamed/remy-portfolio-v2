  import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { makeCreateHomePageFactory } from './factories/pages/create-home-page-factory';

  export const Router = () => {
      return (
          <Routes>
            <Route
              path="/"
              Component={makeCreateHomePageFactory}
            />
          </Routes>
      );
  };

  ReactDOM.render(
      <React.StrictMode>
        <HashRouter>
          <Router />
        </HashRouter>
      </React.StrictMode>,
      document.getElementById("root")
  );

  
