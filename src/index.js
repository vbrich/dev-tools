import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CssBaseline} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import SignInSide from './components/signin/SigninSide';
import { Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CssBaseline />
    <Routes>
          <Route path='/' element={<SignInSide />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
      </Routes>
    <App />
  </BrowserRouter>
);
