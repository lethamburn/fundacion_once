import "./Header.css";

const header = document.createElement("header");

header.innerHTML = `
<h1>Mi App</h1>
<nav>
  <ul>
    <li>
      <a href="#null">Home</a>
    </li>
    <li>
      <a href="#null">Contact</a>
    </li>
    <li>
      <a href="#null">About</a>
    </li>
  </ul>
</nav>
`;

const Header = () => {
  document.body.appendChild(header);
};

export default Header;
