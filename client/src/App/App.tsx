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
      <CardList />
    </div>
  );
}

export default App;
