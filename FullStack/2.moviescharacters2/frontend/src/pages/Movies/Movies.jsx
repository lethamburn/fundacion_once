import './Movies.css';

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import API from '../../API/API';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.get('/movies').then((res) => {
      setMovies(res.data);
    });
  }, []);

  return (
    <main className="movies">
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            <NavLink to={`/movies/${movie.title}`}>
              <img src={movie.cover} alt={movie.title} />
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
