import { Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../features/Navbar/Navbar';
import Registr from '../Users/Registr';
import Login from '../Users/Login';
import './App.css';
import CardList from '../features/cardPade/CardList';
import * as api from './api';

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
        <Route path="/" element={<CardList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registr />} />
      </Routes>
    </div>
  );
}

export default App;
