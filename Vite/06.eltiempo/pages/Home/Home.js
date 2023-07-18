import "./Home.css";

const template = () => {
  return `
  <h2>Experience the Next Generation of Weather Forecasting</h2>
  <p>Get the world’s only space-powered AI weather intelligence to predict impact, mitigate risk, and ensure operational resilience.</p>
  `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;
