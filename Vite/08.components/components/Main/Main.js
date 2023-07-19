import "./Main.css";
import Button from "../Button/Button";
import Text from "../Text/Text";

const template = () => {
  return `
  <h2>Hola</h2>
  ${Button("Click")}
  ${Button("Login", "secondary")}
  ${Button("Register", "primary")}
  ${Button("Warning", "warning")}
  ${Text("Esto es un parrafo")}
  ${Text("Este es pequeño", "small")}
  ${Text("Este es normal", "medium")}
  ${Text("Este es grande", "large")}
  ${Text("Este es super grande", "xl")}
  `;
};

const Main = () => {
  document.querySelector("main").innerHTML = template();
};

export default Main;
