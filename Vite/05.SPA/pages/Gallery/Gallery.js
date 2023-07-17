import "./Gallery.css";

const template = () => {
  return `
  <h2>Gallery</h2>
  <p>Insertar fotos...</p>
  `;
};

const Gallery = () => {
  document.querySelector("main").innerHTML = template();
};

export default Gallery;
