import { useState, useMemo } from "react";

const App = () => {
  const [mostrar, setMostrar] = useState(true);

  const numbers = [1, 2, 3, 4, 5, 6];

  const doubleNumbers = (numbers) => {
    console.log("Ejecutando doubleNumbers");
    return numbers.map((num, i) => {
      const total = num * 2;
      return <p key={i}>{total}</p>;
    });
  };

  const totalNumbersArray = useMemo(() => {
    return doubleNumbers(numbers);
  }, []);

  return (
    <div>
      <div>{mostrar ? totalNumbersArray : "No hay nada"}</div>
      <button onClick={() => setMostrar(!mostrar)}>Mostrar</button>
    </div>
  );
};

export default App;
