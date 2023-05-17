import React from 'react';
import {CssBaseline} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import SignInSide from './components/signin/SigninSide';
import { Route, Routes, Navigate } from 'react-router-dom';
import Davinci from './components/openai/Davinci';
import DallE from './components/openai/DallE';
import DrawerExample from './components/examples/DrawerExample';

function App() {
  return (    
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path='/signin' element={<SignInSide />}/> 
        <Route path='/drawer' element={<DrawerExample />}/>
        <Route path='/' element={<Navigate to="/davinci" replace/>} />   
        <Route path='/main' element={<Navigate to="/davinci" replace/>} />
        <Route path='/*' element={<Main />}>                    
            <Route path='davinci' element={<Davinci />}/>
            <Route path='dalle' element={<DallE />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;