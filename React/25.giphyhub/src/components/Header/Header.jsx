import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = ({ title, links }) => {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.link}>
              <NavLink to={link.link}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
