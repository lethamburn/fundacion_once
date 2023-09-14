import "./Banner.css";

const Banner = ({ logo, logoAlt }) => {
  return (
    <section className="banner">
      <img src={logo} alt={logoAlt} />
    </section>
  );
};

export default Banner;
