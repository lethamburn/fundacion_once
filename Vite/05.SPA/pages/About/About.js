import "./About.css";

const template = () => {
  return `
  <h2>About</h2>
  <p>Sobre mi...</p>
  `;
};

const About = () => {
  document.querySelector("main").innerHTML = template();
};

export default About;
