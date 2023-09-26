import "./Header.css";

const Header = ({action}) => {
  return (
    <header>
      <h1>My App</h1>
      <button onClick={action}>Change theme</button>
    </header>
  );
};

export default Header;
