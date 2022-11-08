import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './redux/productsSlice';
import productSlice from './redux/oneProductSlice';


import { AuthProvider } from './authContext/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer: {
      allProducts: productsSlice,
      product: productSlice,
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode >

  <BrowserRouter>
    <AuthProvider>
        <Provider store = { store } >
            <App  />
        </Provider>
    </AuthProvider>
  </BrowserRouter>

  </React.StrictMode>
);


reportWebVitals();