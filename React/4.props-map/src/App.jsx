import "./App.css";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import reactBanner from "./assets/banner.png"
import Tech from "./components/Tech/Tech";

const App = () => {
  return (
    <>
      <Header />
      <Banner bannerImage={reactBanner} bannerAlt="ReactJS Banner"/>
      <Tech/>
    </>
  );
};

export default App;
