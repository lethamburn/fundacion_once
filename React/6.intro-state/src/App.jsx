import "./App.css";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <p>{counter > 5 ? "Es mayor que cinco" : "Es menor que cinco"}</p>
    </>
  );
};

export default App;
