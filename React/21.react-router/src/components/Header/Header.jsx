import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>React Router</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="homelink">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="aboutlink">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="contactlink">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
