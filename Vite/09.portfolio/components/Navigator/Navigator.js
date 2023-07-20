import "./Navigator.css";

const template = () => {
  return `
  <nav>
    <ul>
      <li>
        <a href="#null" id="home-link">Home</a>
      </li>
      <li>
        <a href="#null" id="about-link">About</a>
      </li>
      <li>
        <a href="#null" id="music-link">Music</a>
      </li>
      <li>
        <a href="#null" id="tour-link">Tour</a>
      </li>
    </ul>
  </nav>
  `;
};

const Navigator = () => {
  document.querySelector("header").innerHTML = template();
};

export default Navigator;
