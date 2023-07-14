import "./Header.css";

const template = () => {
  return `
  <h1>Rock, Paper, Scissors</h1>
  `;
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
};


export default Header