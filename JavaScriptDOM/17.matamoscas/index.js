let PUNTUACION = 0;

const TIEMPOS = {
  baby: 2000,
  junior: 1000,
  dani: 800,
  antuan: 300
}

const panelUsuario = () => {
  document.querySelector("#panel").innerHTML = `
      <h3>${PUNTUACION}</h3>
      <select>
        <option value="baby">Baby Developer</option>
        <option value="junior">Junior</option>
        <option value="dani">Daniel Recio</option>
        <option value="antuan">Antuan</option>
      </select>
      <button>iniciar</button>
  `;

  addButtonEvent();
  
};

const resetear = () => {
  document.body.innerHTML = "<div id='panel'></div>";
  PUNTUACION = 0;
  panelUsuario();
}

const addButtonEvent = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", () => iniciar(document.querySelector("select").value));
}

panelUsuario();

const comprobacion = () => {

  const moscas = document.querySelectorAll(".mosca").length;

  if (moscas >= 10) {
    alert("Has perdido el juego");
    parar();
    resetear(); 
  }

}

const aparecerMosca = () => {
  const mosca = document.createElement("img");

  mosca.src = "./assets/mosca.avif";

  mosca.className = "mosca";

  mosca.addEventListener("click", aplastar);

  let altoAleatorio = Math.random() * window.innerHeight;

  let anchoAleatorio = Math.random() * window.innerWidth;

  mosca.style.position = "absolute";
  mosca.style.top = `${
    altoAleatorio < 200 ? altoAleatorio + 20 : altoAleatorio - 50
  }px`;
  mosca.style.left = `${anchoAleatorio}px`;

  document.body.appendChild(mosca);

  comprobacion();
};

const aplastar = (e) => {
  e.target.className = "mancha";

  e.target.removeEventListener("click", aplastar);

  PUNTUACION++;

  e.target.src = "./assets/mancha.png";

  panelUsuario();
};

let intervalo;

const iniciar = (selectValue) => {

  const loquehaceelintervalo = () => {
      aparecerMosca();
  }

  intervalo = setInterval(loquehaceelintervalo, TIEMPOS[selectValue]);
}

const parar = () => {
  clearInterval(intervalo);
}
