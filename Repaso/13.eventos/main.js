import "./style.css";

const clickBtn = document.querySelector("#clickBtn");

clickBtn.addEventListener("click", (ev) => {
  const p = document.createElement("p");
  p.innerText = "Hola";
  document.body.appendChild(p);
});

//SUMAR
const firstNum = document.querySelector("#firstNum");
const secondNum = document.querySelector("#secondNum");
const sumBtn = document.querySelector("#sumBtn");
const sumResult = document.querySelector("#result");

sumBtn.addEventListener("click", () => {
  const total = Number(firstNum.value) + Number(secondNum.value);
  sumResult.innerText = total;
});

const textInput = document.querySelector("#textInput");
textInput.addEventListener("input", (ev) => {
  console.log(ev.target.value)
})