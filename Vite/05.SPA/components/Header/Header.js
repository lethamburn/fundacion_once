import "./Header.css";

const template = () => {
  return `
  <h1>My App</h1>
  <nav>
    <ul>
      <li>
        <a href="#null" id="home-link">Home</a>
      </li>
      <li>
        <a href="#null" id="gallery-link">Gallery</a>
      </li>
      <li>
        <a href="#null" id="about-link">About</a>
      </li>
      <li>
        <button id="theme-btn">☾</button>
      </li>
    </ul>
  </nav>
  `;
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
