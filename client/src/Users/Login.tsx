import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from './api';

function Login(): JSX.Element {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handlerLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    api
      .loginFetch({ name, password })
      .then((data) => dispatch({ type: 'user/registr', payload: data }));
  };

  return (
    <div className='container'>
      <form onSubmit={handlerLogin}>
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
        <button type="submit">Вход</button>
      </form>
    </div>
  );
}

export default Login;
