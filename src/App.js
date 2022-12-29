import React from 'react';
import {CssBaseline} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import SignInSide from './components/signin/SigninSide';
import TestComponent from './components/TestComponent';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (    
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<SignInSide />}/>
        <Route path='/dashboard/*' element={<Dashboard />}>
         <Route path=":someId" element={<TestComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;