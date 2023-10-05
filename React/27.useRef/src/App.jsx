import "./App.css";
import { useRef, useState } from "react";
import Container from "./components/Container/Container";

const App = () => {
  const textInput = useRef(null);
  const [values, setValues] = useState([]);

  const addValues = () => {
    setValues([...values, textInput.current.value]);
    //Con la misma referencia podemos vaciar el valor del input y asi se va reflejar en el DOM porque nos estamos saltando el Virtual DOM
    textInput.current.value = "";
  };

  return (
    <>
      <input type="text" placeholder="Soy un input" ref={textInput} />
      <button onClick={addValues}>Consultar</button>
      {values.map((value) => (
        <p>{value}</p>
      ))}
      <Container/>
    </>
  );
};

export default App;
