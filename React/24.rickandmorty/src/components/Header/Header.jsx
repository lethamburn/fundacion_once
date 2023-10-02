import "./Header.css";

const Header = ({ logo, logoAlt }) => {
  return (
    <header>
      <img src={logo} alt={logoAlt} />
    </header>
  );
};

export default Header;
