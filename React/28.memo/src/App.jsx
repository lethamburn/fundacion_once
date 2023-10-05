import { useState } from "react";
import "./App.css";
import Movie from "./components/Movie";
import Review from "./components/Review";

function App() {
  const [score, setScore] = useState(0);

  return (
    <>
      <Movie
        title="Guardianes de la Galaxia"
        poster="https://m.media-amazon.com/images/I/61-ndDQWTdL._AC_.jpg"
      />
      <h2>Cambia la puntuación</h2>
      <input type="number" onInput={(ev) => setScore(ev.target.value)} />
      <Review
        title="La mejor película que se ha hecho en la historia del audiovisual"
        score={score}
      />
    </>
  );
}

export default App;
