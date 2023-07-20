import "./Tour.css";
import { tourDates } from "../../data/data";

const template = () => {
  return `
  <ul id="tour-container"></ul>
  `;
};

const printDates = () => {
  const tourContainer = document.querySelector("#tour-container")
  for (const tourDate of tourDates) {
    const li = document.createElement("li");
    li.innerHTML = `
    <h3>${tourDate.site}</h3>
    <h4>${tourDate.city}</h4>
    <h4>${tourDate.date}</h4>
    <a href='${tourDate.link}' target="_blank">Tickets</a>
    `
    tourContainer.appendChild(li)
  }
}

const Tour = () => {
  document.querySelector("main").innerHTML = template();
  printDates()
};

export default Tour