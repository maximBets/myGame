import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';

function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.userReducer);
  console.log(user, '1232313')
  return (
    <nav className="#1a237e indigo darken-4">
      <div className="nav-wrap">
        {user ? (
          <>
            <Link className="brand-logo" to="/">
              Игра
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>привет, user</li>
            </ul>
          </>
        ) : (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/login">вход</Link>
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
