//21/09/2023

import { useState } from "react";
import "./App.css";
import dinosaurs from "./data/data";

const App = () => {
  const [dinosaursList, setDinosaursList] = useState(dinosaurs);

  const filterDinosaurs = (word) => {
    const newDinosaurs = dinosaurs.filter(
      (dino) =>
        dino.name.toLowerCase().includes(word.toLowerCase()) ||
        dino.location.toLowerCase().includes(word.toLowerCase())
    );
    setDinosaursList(newDinosaurs);
  };

  return (
    <>
      <h2>{dinosaursList.length}</h2>
      <input type="text" onInput={(ev) => filterDinosaurs(ev.target.value)} />

      <ul className="dinosaurs-gallery">
        {dinosaursList.map((dino) => (
          <li key={dino.id}>
            <h3>{dino.name}</h3>
            <h4>{dino.location}</h4>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
