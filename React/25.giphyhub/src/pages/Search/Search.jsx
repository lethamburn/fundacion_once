import "./Search.css";
import { useState } from "react";
import Gallery from "../../components/Gallery/Gallery";

const Search = () => {
  const [gifs, setGifs] = useState([]);
  const [value, setValue] = useState("");

  const searchGifs = async () => {
    const data = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${
        import.meta.env.VITE_GIPHY_KEY
      }&limit=25&q=${value}`
    );
    const dataJSON = await data.json();
    setGifs(dataJSON.data);
  };

  return (
    <main>
      <div>
        <input
          type="text"
          value={value}
          onInput={(ev) => setValue(ev.target.value)}
        />
        <button onClick={searchGifs}>Search</button>
      </div>
      <Gallery gifs={gifs} />
    </main>
  );
};

export default Search;
