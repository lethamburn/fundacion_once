import "./Footer.css";

const footer = document.createElement("footer");

footer.innerHTML = `
<p>Fundación Once - 2023</p>
`;

const Footer = () => {
  document.body.appendChild(footer);
};

export default Footer;
