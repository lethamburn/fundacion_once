import "./Transformers.css";

const template = () => {
  return `
   <h2>Transformers name</h2>
   <input type="text" id="trans-input"/>
   <button id="trans-btn">Generar</button> 
   <h3 id="trans-result"></h3>
  `;
};

const Transformers = () => {
  document.querySelector("#transformers").innerHTML = template();
  //Recupero el boton
  const btn = document.querySelector("#trans-btn");
  //Recupero el input
  const input = document.querySelector("#trans-input");
  //Le añadimos un evento al botón que al hacer click nos lea cual es el valor de input
  btn.addEventListener("click", () => {
    document.querySelector("#trans-result").innerText = input.value + "bot";
  });
};

export default Transformers;
