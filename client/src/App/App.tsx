import { Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css';
import Navbar from '../features/Navbar/Navbar';
import Registr from '../Users/Registr';
import Game from '../features/gamePade/GamePage'

import Login from '../Users/Login'



function App(): JSX.Element {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/registration" element={<Registr />} />
      </Routes>
    </div>
  );
}

export default App;
