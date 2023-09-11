import "./style.css";

const divApp = document.querySelector("#app");
const h1 = document.createElement("h1");
h1.textContent = "Titulo";
divApp.appendChild(h1);
h1.style.color = "blue";

//document.body.style.backgroundImage = "url('https://dsm6fpp1ioao4.cloudfront.net/sim_c03e76d1-2855-44ca-85c1-c1ed5e047a95.png')"
//document.body.style.backgroundSize = "10%";

const movies = [
  "Transformers (2007)",
  "Transformers: La venganza de los caídos (2009)",
  "Transformers: El lado oscuro de la luna (2011)",
  "Transformers: La era de la extinción (2014)",
  "Transformers: El último caballero (2017)",
  "Bumblebee (2018)",
];

const ul = document.createElement("ul");

for (const movie of movies) {
  const li = document.createElement("li");
  li.textContent = movie;
  ul.appendChild(li)
}

divApp.appendChild(ul)