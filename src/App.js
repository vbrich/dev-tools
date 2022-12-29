import React from 'react';
import {CssBaseline} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import SignInSide from './components/signin/SigninSide';
import { Route, Routes } from 'react-router-dom';
import Overview from './components/Overview';
import ApiTestComponent from './components/ApiTest';

function App() {
  return (    
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path='/signin' element={<SignInSide />}/>
        <Route path='/' element={<Main />}>        
            <Route path='overview' element={<Overview />}></Route>
            <Route path='apitest' element={<ApiTestComponent somedata1="somedata" somedata2="somedata2"/>}></Route>          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;