import "./Gallery.css";

const template = () => {
  return `
  <div class="searchField">
    <input type="text" id="searchInput" />
    <button id="searchBtn">Search</button>
  </div>
  <ul id="result">
  </ul>
  `;
};

const getPhotos = async (keyword) => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?client_id=674SfpAIQXpkf5a3XT96nJDFugHWHVpc3-q5o_A_nNk&query=${keyword}&per_page=20`
  );
  const dataJSON = await data.json();
  printPhotos(dataJSON.results)
};

const printPhotos = (list) => {
  const ul = document.querySelector("#result");
  ul.innerHTML = ""
  for (const photo of list) {
    const li = document.createElement("li");
    li.innerHTML = `
    <img src=${photo.urls.small} alt=${photo.alt_description} />
    `
    ul.appendChild(li)
  }
}

const Gallery = () => {
  document.querySelector("main").innerHTML = template();
  document.querySelector("#searchBtn").addEventListener("click", () => {
    const searchInput = document.querySelector("#searchInput");
    getPhotos(searchInput.value)
  })
};

export default Gallery;
