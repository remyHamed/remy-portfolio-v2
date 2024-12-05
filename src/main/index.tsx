import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { makeCreateMyProjectPageFactory } from './factories/pages/create-my-project-page-factory';
import { makeCreateHomePageFactory } from './factories/pages/create-home-page-factory';


  export const Router = () => {
      return (
          <Routes>
            <Route path="/my_projects" Component={makeCreateMyProjectPageFactory} />
            <Route path="/" Component={makeCreateHomePageFactory}/>
          </Routes>
      );
  };

  const container :HTMLElement|null = document.getElementById('root');
  if (!container) {
    throw new Error('Container element not found');
  }
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <HashRouter>
        <Router />
      </HashRouter>
    </React.StrictMode>
  );

  
