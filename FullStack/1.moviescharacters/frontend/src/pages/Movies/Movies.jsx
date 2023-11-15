import "./Movies.css";
import { useState, useEffect } from "react";

const Movies = () => {
  const [movielist, setMovielist] = useState([]);

  const getMovies = async () => {
    const data = await fetch("http://localhost:8080/movies");
    const dataJSON = await data.json();
    setMovielist(dataJSON);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <main>
      <ul>
        {movielist.map((movieelement) => (
          <li key={movieelement._id}>
            <img src={movieelement.cover} alt={movieelement.title} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
