import "./App.css";
import logo from "./assets/sw_logo.png";
import { links } from "./data/data";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header logo={logo} logoAlt="Star Wars logo" links={links} />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
