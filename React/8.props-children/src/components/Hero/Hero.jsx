import "./Hero.css";

const Hero = ({ heroImage, heroAlt }) => {
  return (
    <section className="hero">
      <img src={heroImage} alt={heroAlt} />
    </section>
  );
};

export default Hero;
