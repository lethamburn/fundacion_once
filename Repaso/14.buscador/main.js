import "./style.css";
import peliculasPopulares from "./data/data";

const app = document.querySelector("#app");
const searchInput = document.querySelector("#searchInput");

const printList = (list) => {
  app.innerHTML = "";
  const ul = document.createElement("ul");
  for (const movie of list) {
    const li = document.createElement("li");
    li.textContent = movie;
    ul.appendChild(li);
  }
  app.appendChild(ul);
};

searchInput.addEventListener("input", (ev) => {
  const newMovies = peliculasPopulares.filter((movie) =>
    movie.toLowerCase().includes(ev.target.value.toLowerCase())
  );
  printList(newMovies);
});

printList(peliculasPopulares);
