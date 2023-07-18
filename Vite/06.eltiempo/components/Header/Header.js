import "./Header.css";

const template = () => {
  return `
  <img src="/icons/logo.png" alt="Weather icon"/>
  <h1>Weather Forecasts</h1>
  <nav>
    <ul>
      <li>
        <a href="#null" id="home-link">Home</a>
      </li>
      <li>
        <a href="#null" id="realtime-link">Realtime</a>
      </li>
      <li>
        <a href="#null" id="forecast-link">Forecast</a>
      </li>
    </ul>
  </nav>
  `;
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
};

export default Header;
