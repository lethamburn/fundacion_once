import "./App.css";
import { useState } from "react";
import English from "./components/English";
import Spanish from "./components/Spanish";

const App = () => {
  const [word, setWord] = useState("");
  const [lang, setLang] = useState("es");
  return (
    <>
      <input
        type="text"
        onInput={(e) => {
          setWord(e.target.value);
          console.log(word);
        }}
      />
      <h2>{word}</h2>
      <p>----------------</p>
      <button onClick={() => setLang("es")}>🇪🇸</button>
      <button onClick={() => setLang("en")}>🇺🇸</button>
      <button onClick={() => setLang("fr")}>🇫🇷</button>
      {lang === "es" ? (
        <Spanish />
      ) : lang === "en" ? (
        <English/>
      ) : lang === "fr" ? (
        <h1>Bienvenue à React</h1>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
