import React from 'react';
import {CssBaseline} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import SignInSide from './components/signin/SigninSide';
import { Route, Routes, Navigate } from 'react-router-dom';
import ApiTestComponent from './components/main/ApiTest';
import TemporaryDrawer from './components/examples/DrawerExample';
import Favorites from './components/main/Favorites';
import Chat from './components/chat/Chat';

function App() {
  return (    
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path='/signin' element={<SignInSide />}/>
        <Route path='/' element={<Navigate to="/favorites" replace/>} />                
        <Route path='/main' element={<Navigate to="/favorites" replace/>} />
        <Route path='/*' element={<Main />}>                    
            <Route path='apitest' element={<ApiTestComponent somedata1="somedata" somedata2="somedata2"/>}></Route>          
            <Route path='favorites' element={<Favorites />}/>
            <Route path='chat' element={<Chat />}/>
        </Route>
        <Route path='/drawer' element={<TemporaryDrawer />}/>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;