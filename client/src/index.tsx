import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './scss/index.scss'
import Layout from "./components/layout";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);