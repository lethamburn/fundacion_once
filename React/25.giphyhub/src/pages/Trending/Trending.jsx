import "./Trending.css";
import { useState, useEffect } from "react";
import Gallery from "../../components/Gallery/Gallery";

const Trending = () => {
  const [gifs, setGifs] = useState([]);

  const getTrendingGifs = async () => {
    const data = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${
        import.meta.env.VITE_GIPHY_KEY
      }&limit=25`
    );
    const dataJSON = await data.json();
    setGifs(dataJSON.data);
  };

  useEffect(() => {
    getTrendingGifs();
  }, []);

  return (
    <main>
      <Gallery gifs={gifs} />
    </main>
  );
};

export default Trending;
