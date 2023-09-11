import "./Main.css";
import sneakers from "../../data/data";

const Main = () => {
  return `
  <main>
    <h2>Popular sneakers</h2>
    <ul>
    ${sneakers.map((sneaker) => `
    <li>
      <img src=${sneaker.photo} alt=${sneaker.name}/>
      <h3>${sneaker.brand}</h3>
      <h3>${sneaker.name}</h3>
      <h4>${sneaker.price} €</h4>
    </li>
    `).join("")}
    </ul>
  </main>
  `;
};

export default Main;
