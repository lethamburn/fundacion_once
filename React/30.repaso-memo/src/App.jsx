import { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(25);

  return (
    <>
      <Header name={name} setName={setName} />
      <Card age={age} setAge={setAge} />
    </>
  );
}

export default App;
