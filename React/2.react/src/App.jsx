import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Banner from "./components/Banner/Banner";

const App = () => {
  const logoSrc = "https://www.paragyte.com/img/React_Banner.png";

  return (
    <>
      <Header />
      <Hero />
      <Banner logo={logoSrc} logoAlt="ReactJS logo"/>
    </>
  );
};

export default App;
