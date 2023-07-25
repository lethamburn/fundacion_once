import "./Home.css";

const template = () => {
  return `
  <h2>Home</h2>
  <p>Bienvenidos a Router</p>
  `;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;
