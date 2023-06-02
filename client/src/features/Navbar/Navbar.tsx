import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import './Navbar.css';

function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userReducer);

  return (
    <nav className="#1a237e indigo darken-4">
      <div className="nav-wrap">
        {user?.name ? (
          <>
            <Link to="/">
              <div className="brand-logo">Игра</div>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down ">
              <li className="privet">Привет, {user.name}!</li>
              <li className="privet">Твой Счёт: {user.totalScore}</li>
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
