import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

//API KEY = a437dc3b214b543816ab39af1f8e5ab2
//SHARED SECRET = 56189284e2b311f701574ae9174b9bab

const App = () => {
  const [bandName, setBandName] = useState("Iron Maiden");
  return (
    <>
      <Header title="HarmoniX" setBandName={setBandName} />
      <Main bandName={bandName} setBandName={setBandName}/>
      <Footer />
    </>
  );
};

export default App;
