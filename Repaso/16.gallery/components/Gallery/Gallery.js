import "./Gallery.css";

let keyword = "";
let perPage = "";
let pageNum = 1;

const template = () => {
  return `
  <div class="searchField">
    <input type="text" id="searchInput" />
    <select id="pageSelect">
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
    <button id="searchBtn">Search</button>
    <button id="prevBtn">◀</button>
    <button id="nextBtn">▶</button> 
  </div>
  <ul id="result">
  </ul>
  `;
};

const getPhotos = async (keyword, numPhotos, pageNum) => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${
      import.meta.env.VITE_UNSPLASH_KEY
    }&query=${keyword}&per_page=${numPhotos}&page=${pageNum}`
  );
  const dataJSON = await data.json();
  console.log(dataJSON);
  printPhotos(dataJSON.results);
};

const printPhotos = (list) => {
  const ul = document.querySelector("#result");
  ul.innerHTML = "";
  for (const photo of list) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src=${photo.urls.small} alt=${photo.alt_description} style="border: 10px solid ${photo.color}" />
    `;
    ul.appendChild(li);
  }
};

const Gallery = () => {
  document.querySelector("main").innerHTML = template();
  //Search
  document.querySelector("#searchBtn").addEventListener("click", () => {
    const searchInput = document.querySelector("#searchInput");
    const pageSelect = document.querySelector("#pageSelect");
    keyword = searchInput.value;
    perPage = pageSelect.value;
    pageNum = 1;
    getPhotos(searchInput.value, pageSelect.value, 1);
  });
  //Next
  document.querySelector("#nextBtn").addEventListener("click", () => {
    pageNum++;
    getPhotos(keyword, perPage, pageNum);
  });
  //Prev
  document.querySelector("#prevBtn").addEventListener("click", () => {
    pageNum--;
    getPhotos(keyword, perPage, pageNum);
  });
};

export default Gallery;
