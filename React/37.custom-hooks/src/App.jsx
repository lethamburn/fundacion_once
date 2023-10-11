import "./App.css";
import { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import useWindowSize from "./hooks/useWindowSize";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 1000);
  const { width, height } = useWindowSize();
  const { data, loading, error } = useFetch(
    "https://rickandmortyapi.com/api/character"
  );
  console.log(data, loading, error);

  return (
    <>
      <input type="text" onInput={(ev) => setInputValue(ev.target.value)} />
      <h1>{debouncedValue}</h1>
      <h2>
        El tamaño de la pantalla es {width} + {height}
      </h2>
    </>
  );
};

export default App;
