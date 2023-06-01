import React from 'react';
import { Link } from 'react-router-dom';
const user = false

function Navbar(): JSX.Element {
  return (
    <nav className="#1a237e indigo darken-4">
      <div className="nav-wrap">
        {user ? (
          <>
            <Link className="brand-logo" to="/">
              Игра
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>привет,</li>
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
