import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';

function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userReducer);

  return (
    <nav className="#1a237e indigo darken-4">
      <div className="nav-wrap">
        {user?.name ? (
          <>
            <Link className="brand-logo" to="/">
              Игра
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                Привет, {user.name}! Твой счёт: {user.totalScore}{' '}
              </li>
            </ul>
          </>
        ) : (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/login">Вход</Link>
            </li>
            <li>
              <Link to="/registration">Регистрация</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
