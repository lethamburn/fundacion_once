import "./Music.css";
import { albums } from "../../data/data";

const template = () => {
  return `
  <ul id="music-container"></ul>
  `;
};

const printMusic = () => {
  const musicContainer = document.querySelector("#music-container");
  for (const album of albums) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src='${album.cover}' alt='${album.title}' />
    <h3>${album.title} - ${album.year}</h3>
    <h4>${album.discography}</h4>
    `;
    musicContainer.appendChild(li);
  }
};

const Music = () => {
  document.querySelector("main").innerHTML = template();
  printMusic();
};

export default Music;
