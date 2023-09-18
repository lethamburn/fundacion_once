import "./Main.css";
import videogames from "../../data/videogames";
import retrovideogames from "../../data/retrovideogames";
import Card from "../Card/Card";

const Main = () => {
  return (
    <main>
      <ul>
        {videogames.map((videogame) => (
          <Card data={videogame} key={videogame.id} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
