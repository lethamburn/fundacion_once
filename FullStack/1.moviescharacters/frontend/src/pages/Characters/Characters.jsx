import "./Characters.css";
import { useState, useEffect } from "react";
const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const data = await fetch("http://localhost:8080/characters");
    const dataJSON = await data.json();
    setCharacters(dataJSON);
  };

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <main>
      <ul>
        {characters.map((character) => (
          <li key={character._id}>
            <h2>{character.name}</h2>
            <h3>{character.actor}</h3>
            <p>{character.role}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Characters;
