import React from 'react';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';

import Home from '../pages/home';
import Product from '../pages/product';
import Catalog from '../pages/catalog';
import Cart from '../pages/cart';

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog/:slug' element={<Product />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/cart' element={<Cart />} />
    </BrowserRoutes>
  );
};

export default Routes;
