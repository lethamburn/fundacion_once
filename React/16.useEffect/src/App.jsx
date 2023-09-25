import "./App.css";
import Hello from "./components/Hello";
import { useState } from "react";

const App = () => {
  const [showHello, setShowHello] = useState(false);
  return (
    <>
      {showHello ? <Hello /> : ""}
      <button onClick={() => setShowHello(!showHello)}>Click</button>
    </>
  );
};

export default App;
