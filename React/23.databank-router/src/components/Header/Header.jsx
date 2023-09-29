import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = ({ logo, logoAlt, links }) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <header>
      <button onClick={scrollToTop}>Scroll to top</button>
      <img src={logo} alt={logoAlt} />
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <NavLink to={link.link}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
