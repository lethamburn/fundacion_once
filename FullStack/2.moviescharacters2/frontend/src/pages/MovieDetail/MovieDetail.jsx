import './MovieDetail.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import API from '../../API/API';

const MovieDetail = () => {
  const { name } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    API.get(`/movies/name/${name}`).then((res) => {
      setMovie(res.data);
    });
  }, []);

  return (
    <main>
      {movie !== null ? (
        <>
          <h2>{movie.title}</h2>
          <img src={movie.cover} alt={movie.title} />
          <h3>Characters</h3>
          <ul>
            {movie.characters.map((character) => (
              <li key={character._id}>
                <h4>{character.name}</h4>
                <p>{character.actor}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <h2>Movie not found</h2>
      )}
    </main>
  );
};

export default MovieDetail;
