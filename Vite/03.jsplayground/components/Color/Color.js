import "./Color.css";

const template = () => {
  return `
  <h2 id="color-title">Elige un color</h2>
  <input type="color" id="color-input"/>
  `;
};

const Color = () => {
  document.querySelector("#color").innerHTML = template();
  const input = document.querySelector("#color-input");
  input.addEventListener("change", () => {
    document.querySelector("#color").style.backgroundColor = input.value;
    document.querySelector("#color-title").innerText = input.value;
  });
};

export default Color;
