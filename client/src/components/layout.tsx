import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import Routes from '../routes/routes';

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <div className="main">
            <Routes />
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
