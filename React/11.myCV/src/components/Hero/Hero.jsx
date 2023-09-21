import "./Hero.css";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img src={hero.image} alt={hero.name} />
      <div className="card">
        <h2>
          {hero.name} {hero.surname}
        </h2>
        <p>🗺{hero.city} </p>
        <p>🗓{hero.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + hero.email}>tony@starkindustries.com</a>
        </p>
       
        <p>
          💾<a href={hero.gitHub}>GitHub</a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
