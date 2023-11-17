import './Header.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { UserContext } from '../../context/userContext';

const Header = () => {
  const { user, logout } = useContext(UserContext);
  return (
    <header>
      <h1>FlixFlow</h1>
      {user !== null && <h2>Hola {user.username}</h2>}
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          {user !== null ? (
            <>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
              <li>
                <NavLink to="/profile">
                  <img className="avatar" src={user.avatar} alt={user.username} />
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
