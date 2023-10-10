import "./Header.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../context/usercontext";
import { useContext } from "react";

const Header = () => {
  const { user, isAuth, logout } = useContext(UserContext);
  return (
    <header>
      <h1>{user !== "Antonio" ? "Please log in" : "Welcome " + user}</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          {!isAuth ? (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          ) : (
            <button onClick={logout}>Logout</button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
