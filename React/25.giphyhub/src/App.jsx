import "./App.css";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import links from "./data/data";
//zSw3WCwUL434f9TPHqkDUk7t4JtGEEU9

function App() {
  return (
    <>
      <Header title="GiphyHub" links={links} />
      <Outlet />
    </>
  );
}

export default App;
