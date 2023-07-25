import "./NotFound.css";

const template = () => {
  return `
  <h2>404 Not Found</h2>
  <p>Try another route</p>
  `;
};

const NotFound = () => {
  document.querySelector("main").innerHTML = template();
};

export default NotFound;
