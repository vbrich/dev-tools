import React from 'react';
import {CssBaseline} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import SignInSide from './components/signin/SigninSide';
import { Route, Routes } from 'react-router-dom';
import Overview from './components/Overview';
import TestComponent from './components/TestComponent';

function App() {
  return (    
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<SignInSide />}/>
        <Route path='/dashboard/*' element={<Dashboard />}>        
            <Route path='overview' element={<Overview />}></Route>
            <Route path='testing2' element={<TestComponent somedata1="somedata" somedata2="somedata2"/>}></Route>          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;