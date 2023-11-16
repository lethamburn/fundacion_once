import "./Characters.css";
import { useState, useEffect } from "react";
import API from "../../services/API";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    const result = await API.get("/characters");
    setCharacters(result.data);
  };

  useEffect(() => {
    getCharacters()
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
