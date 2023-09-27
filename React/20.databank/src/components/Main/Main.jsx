import Card from "../Card/Card";
import "./Main.css";
import { useEffect, useState } from "react";

const Main = () => {
  const [characters, setCharacters] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [loaded, setLoaded] = useState(false);

  const getCharacters = async () => {
    setLoaded(false);
    const data = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/characters?page=${actualPage}`
    );
    const dataJSON = await data.json();
    setCharacters(dataJSON.data);
    setLoaded(true);
  };

  //Le decimos a useEffect que lance getCharacters al renderizarse este componente Main
  //El array de dependencias está vacío para que se ejecute getCharacters solo una vez al renderizarse Main
  useEffect(() => {
    getCharacters();
  }, [actualPage]);

  return (
    <main>
      <div className="btns">
        {actualPage > 1 ? (
          <button onClick={() => setActualPage(actualPage - 1)}>Prev</button>
        ) : (
          <button disabled>Prev</button>
        )}
        {actualPage < 97 ? (
          <button onClick={() => setActualPage(actualPage + 1)}>Next</button>
        ) : (
          <button disabled>Next</button>
        )}
      </div>
      {loaded ? (
        <ul>
          {characters.map((character) => (
            <Card item={character} key={character._id} />
          ))}
        </ul>
      ) : (
        <img src="https://i.pinimg.com/originals/21/c6/ff/21c6ff1fa222eb03b8e0b9718e69286c.png" alt="logo empire" className="spinner"/>
      )}
    </main>
  );
};

export default Main;
