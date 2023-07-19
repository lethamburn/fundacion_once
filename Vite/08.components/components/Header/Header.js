import "./Header.css";
import { navLinks } from "../../data/data";

const template = () => {
  return `
  <h1>Titulo</h1>
  <nav>
    <ul id="navigator">
    </ul>
  </nav>
  `;
};

const addDynamicElements = () => {
  const navigator = document.querySelector("#navigator");
  for (const navLink of navLinks) {
    const li = document.createElement("li");
    li.innerHTML = `
    <a href=${navLink.link}>${navLink.title}</a>
    `;
    navigator.appendChild(li)
  }
};

const Header = () => {
  document.querySelector("header").innerHTML = template();
  addDynamicElements();
};

export default Header;
