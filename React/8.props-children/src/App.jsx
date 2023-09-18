import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Hero
        heroImage="https://r4.wallpaperflare.com/wallpaper/461/634/358/artwork-futuristic-science-fiction-fred-gambino-wallpaper-7c1a8d245a23bb9647b7ae35330b4257.jpg"
        heroAlt="Space wallpaper banner"
      />
      <Main />
    </>
  );
};

export default App;
