import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

import logo from "./assets/logo.png";

const App = () => {
  return (
    <>
      <Header headerImage={logo} headerAlt="Star Wars Logo" />
      <Main />
      <Footer />
    </>
  );
};

export default App;
