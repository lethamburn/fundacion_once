import "./App.css";
import { useRef } from "react";

const App = () => {
  const text = useRef(null);
  const input = useRef(null);

  const changeText = () => {
    text.current.innerText = input.current.value;
  };

  return (
    <>
      <h2 ref={text}></h2>
      <input type="text" ref={input} onInput={changeText} />
    </>
  );
};

export default App;
