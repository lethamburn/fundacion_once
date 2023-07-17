import "./Home.css";

const template = () => {
  return `
  <h2>Welcome</h2>
  <p>This is my first SPA (Single page application)</p>
  `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;
