import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <Header
        logo="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Symbol.png"
        logoAlt="Rick and Morty logo"
      />
      <Main />
      <Footer />
    </>
  );
};

export default App;
