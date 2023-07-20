import "./Home.css";

const template = () => {
  return `<img class="logo" src="/images/logo.png" alt="Tame Impala logo"/>`;
};

const Home = () => {
  document.querySelector("main").innerHTML = template();
};

export default Home;
