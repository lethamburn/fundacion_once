import "./App.css";
import { useReducer } from "react";

function App() {
  //Definir una función reductora, mediante un switch
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "DUPLICATE":
        return { count: state.count * 2 };
      case "SPLIT":
        return { count: state.count / 2 };
      case "RESET":
        return { count: 0 };
      default:
        return state;
    }
  };
  //Definimos el useReducer usando la función reductora y el estado inicial
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div>
        <h1>Contador: {state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Incrementar
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrementar
        </button>
        <button onClick={() => dispatch({ type: "DUPLICATE" })}>
          Duplicar
        </button>
        <button onClick={() => dispatch({ type: "SPLIT" })}>Dividir</button>
        <button onClick={() => dispatch({ type: "RESET" })}>Reiniciar</button>
      </div>
    </>
  );
}

export default App;
