import "./Footer.css";

const template = () => {
  return `
  <p>Copyright 2023 - Fundación Once</p>
  `;
};

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
