//1º Importamos los estilos, estos estilos se van a sumar a todos los demás (no son exclusivos para este fichero)
import "./Transformers.css";

const Transformers = () => {
  //Primero recuperamos el contenedor
  const section = document.querySelector("#transformers");
  //Creamos el titulo
  const h2 = document.createElement("h2");
  h2.innerText = "Transformers name";
  section.appendChild(h2);
  //Creamos un input
  const input = document.createElement("input");
  input.type = "text";
  section.appendChild(input);
  //Creamos el botón
  const btn = document.createElement("button");
  btn.innerText = "Generar";
  section.appendChild(btn);
  //Creamos un bloque de texto vacio debajo del botón
  const h3 = document.createElement("h3");
  section.appendChild(h3);
  //Le vamos añadir el evento
  btn.addEventListener("click", () => {
    const transformerName = input.value + "bot";
    h3.innerText = transformerName;
  });
};

export default Transformers;
