import "./Main.css";

const main = document.createElement("main");

main.innerHTML = `
<h2>Bienvenidos a mi app</h2>
<p>Esto es un texto de ejemplo</p>
`;

const Main = () => {
  document.body.appendChild(main);
};

export default Main;
