import React from 'react';
import {CssBaseline} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import SignInSide from './components/signin/SigninSide';
import { Route, Routes, Navigate } from 'react-router-dom';
import Overview from './components/main/Overview';
import ApiTestComponent from './components/main/ApiTest';
import TemporaryDrawer from './components/main/DrawerExample';

function App() {
  return (    
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path='/signin' element={<SignInSide />}/>
        <Route path='/' element={<Navigate to="/overview" replace/>} />                
        <Route path='/main' element={<Navigate to="/overview" replace/>} />
        <Route path='/*' element={<Main />}>        
            <Route path='overview' element={<Overview />}></Route>
            <Route path='apitest' element={<ApiTestComponent somedata1="somedata" somedata2="somedata2"/>}></Route>          
        </Route>
        <Route path='/drawer' element={<TemporaryDrawer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;