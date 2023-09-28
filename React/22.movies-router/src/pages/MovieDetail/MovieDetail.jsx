import "./MovieDetail.css";
import { useParams } from "react-router-dom";
import { getMovie } from "../../data/data";

const MovieDetail = () => {
  const { title } = useParams();
  const movie = getMovie(title);

  if (!movie) {
    return (
      <main>
        <h2>Pelicula no encontrada</h2>
      </main>
    );
  } else {
    return (
      <main>
        <div>
          <h2>{movie.title}</h2>
          <h3>{movie.year}</h3>
          <h3>{movie.director}</h3>
          <img src={movie.poster} alt={movie.title} />
          <p>{movie.description}</p>
        </div>
      </main>
    );
  }
};

export default MovieDetail;
