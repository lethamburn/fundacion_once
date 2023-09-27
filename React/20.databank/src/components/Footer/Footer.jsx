import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return <footer>© {year} - Star Wars - Fundación Once</footer>;
};

export default Footer;
