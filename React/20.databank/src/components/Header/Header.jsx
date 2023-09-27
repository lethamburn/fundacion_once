import "./Header.css";

const Header = ({ headerImage, headerAlt }) => {
  return (
    <header>
      <img src={headerImage} alt={headerAlt} />
    </header>
  );
};

export default Header;
