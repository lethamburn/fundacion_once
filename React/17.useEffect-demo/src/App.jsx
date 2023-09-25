import "./App.css";
import { useState, useEffect } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const getCharacters = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pageNum}`
    );
    const dataJSON = await data.json();
    setCharacters(dataJSON.results);
  };

  useEffect(() => {
    getCharacters();
  }, [pageNum]);

  return (
    <>
      {pageNum > 1 ? (
        <button onClick={() => setPageNum(pageNum - 1)}>Prev</button>
      ) : (
        <button disabled>Prev</button>
      )}
      {pageNum < 42 ? (
        <button onClick={() => setPageNum(pageNum + 1)}>Next</button>
      ) : (
        <button disabled>Next</button>
      )}

      {characters.map((character) => (
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </>
  );
};

export default App;
