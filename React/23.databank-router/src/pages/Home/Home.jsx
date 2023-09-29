import "./Home.css";
import clip from "../../assets/clip.mp4";

const Home = () => {
  return (
    <main className="home">
      <video src={clip} loop controls alt="Star Wars timeline" muted autoPlay />
    </main>
  );
};

export default Home;
