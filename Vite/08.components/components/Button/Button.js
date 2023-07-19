//COMPONENTE REUTILIZABLE COMO EN REACT
import "./Button.css";

const Button = (text, variant) => {
  if (variant === "primary") {
    return `
    <button>${text}</button>
    `;
  } else if (variant === "secondary") {
    return `
    <button class="btn-secondary">${text}</button>
    `;
  } else if (variant === "warning") {
    return `
    <button class="btn-warning">${text}</button>
    `;
  } else {
    return `
    <button>${text}</button>
    `;
  }
};

export default Button;
