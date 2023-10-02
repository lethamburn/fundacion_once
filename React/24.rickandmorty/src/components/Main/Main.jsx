import "./Main.css";
import { useState, useEffect } from "react";
//Importamos useDebounce de la libreria que hemos instalado
import { useDebounce } from "use-debounce";
//Importamos axios
import axios from "axios";

const Main = () => {
  //Creamos un estado inputValue que empiece siendo ""
  const [inputValue, setInputValue] = useState("");
  //Creamos un estado con un array vacio donde almacenar los resultados de la busqueda
  const [characters, setCharacters] = useState([]);
  //"Debounceamos" el estado inputValue 700 milisegundos para que no se lance una petición cada vez que escribimos
  const [value] = useDebounce(inputValue, 700);
  //Creamos un estado para controlar los errores
  const [error, setError] = useState(false);

  const searchCharacter = async () => {
    //Siempre que lanzamos la busqueda desactivamos los errores
    setError(false);
    try {
      //Intentamos hacer la petición con axios y posteriormente seteamos los resultados en el array de personajes
      const res = await axios.get(
        `https://rickandmortyapi.com/api/character?name=${value}`
      );
      setCharacters(res.data.results);
    } catch (error) {
      //Si la petición arroja algun tipo de error, lo que hacemos es setear error en true
      setError(true);
    }
  };

  useEffect(() => {
    searchCharacter();
  }, [value]);

  return (
    <main>
      <div className="search">
        <input
          type="text"
          placeholder="Character name..."
          value={inputValue}
          onInput={(ev) => setInputValue(ev.target.value)}
        />
      </div>
      {error ? (
        <>
          <h2>No existe este personaje</h2>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
            alt="Placeholder Rick and Morty"
          />
        </>
      ) : (
        <section className="result">
          {characters.map((char) => (
            <div key={char.id}>
              <h3>{char.name}</h3>
              <h4>{char.status}</h4>
              <h4>{char.origin.name}</h4>
              <img src={char.image} alt={char.name} />
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default Main;
