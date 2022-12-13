import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CssBaseline} from '@mui/material';
// import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
