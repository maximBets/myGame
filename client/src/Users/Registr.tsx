import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from './api';

function Registr(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const registration = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api
      .registrFetch({ name, password })
      .then((data) => dispatch({ type: 'user/registr', payload: data }));
  };

  return (
    <div>
      <form onSubmit={registration}>
        <input
          name="name"
          placeholder="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">registration</button>
      </form>
    </div>
  );
}

export default Registr;
