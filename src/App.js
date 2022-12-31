import React from 'react';
import {CssBaseline} from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main/Main';
import SignInSide from './components/signin/SigninSide';
import { Route, Routes, Navigate } from 'react-router-dom';
import TemporaryDrawer from './components/examples/DrawerExample';
import Favorites from './components/main/Favorites';
import Question from './components/openai/Question';
import Roadmap from './components/main/Roadmap';
import Game from './components/games/Game';

function App() {
  return (    
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path='/signin' element={<SignInSide />}/> 
        <Route path='/' element={<Navigate to="/roadmap" replace/>} />   
        <Route path='/main' element={<Navigate to="/roadmap" replace/>} />
        <Route path='/*' element={<Main />}>                    
            <Route path='roadmap' element={<Roadmap />}/>
            <Route path='favorites' element={<Favorites />}/>
            <Route path='question' element={<Question />}/>
            <Route path='games' element={<Game />}/>
        </Route>
        <Route path='/drawer' element={<TemporaryDrawer />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;