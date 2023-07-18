import "./Forecast.css";

const template = () => {
  return `
  <h2>Forecast</h2>
  <p>.........</p>
  `;
};

const Forecast = () => {
  document.querySelector("main").innerHTML = template();
};

export default Forecast;
