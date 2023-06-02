import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import * as api from './api';

function Registr(): JSX.Element {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const dispatch = useDispatch();

  if ('id' in user) {
    navigate('/');
  }

  const registration = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api
      .registrFetch({ name, password, password2 })
      .then((data) => dispatch({ type: 'user/registr', payload: data }));
  };

  return (
    <div>
      <form onSubmit={registration}>
        <input
          name="name"
          placeholder="Имя"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          name="password"
          placeholder="Пароль"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          name="password2"
          placeholder="Повторите пароль"
          type="password"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
        />
        <button type="submit">registration</button>
      </form>
    </div>
  );
}

export default Registr;
