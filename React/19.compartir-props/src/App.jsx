import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    console.log(darkTheme);
  };

  return (
    <>
      <Header action={toggleTheme} />
      <Main theme={darkTheme} />
    </>
  );
};

export default App;
