import "./Movies.css";
import { movies } from "../../data/data";
import { NavLink } from "react-router-dom";

const Movies = () => {
  return (
    <main className="movies">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.title}`}>
              <img
                src={movie.poster}
                alt={movie.title}
                referrerPolicy="no-referrer"
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
