import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Header />
      <input onInput={handleInput} placeholder="Type your name!" />
      <h2 data-testid="result">{text}</h2>
    </>
  );
};

export default App;
