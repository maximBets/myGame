import { Route, Routes } from 'react-router-dom';
import Navbar from '../features/Navbar/Navbar';
import Registr from '../Users/Registr';
import Login from '../Users/Login'
import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Card from '../features/cardPade/Card';
import * as api from './api';
import CardList from '../features/cardPade/CardList';

function App(): JSX.Element {
  const despatch = useDispatch();

  useEffect(() => {
    api
      .initFetch()
      .then((data) => despatch({ type: 'flashcards/init', payload: data }));
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/registration" element={<Registr />} />
      </Routes>
      <CardList />
    </div>
  );
}

export default App;
