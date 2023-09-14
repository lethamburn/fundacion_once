import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";

const App = () => {
  const firstName = "Paco Heredia";

  return (
    <>
      <Header />
      <Button/>
      <Main />
      <Button/>
      <Footer />
    </>
  );
};

export default App;
