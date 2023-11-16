import "./Movies.css";
import { useState, useEffect, useRef } from "react";
import API from "../../services/API";

const Movies = () => {
  const titleValue = useRef(null);
  const fileValue = useRef(null);
  const [movielist, setMovielist] = useState([]);
  const [newMovie, setNewMovie] = useState("");

  const getMovies = async () => {
    const movies = await API.get("/movies");
    setMovielist(movies.data);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const body = new FormData();
    body.append("title", titleValue.current.value);
    body.append("cover", fileValue.current.files[0]);

    await API.post("/movies", body, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      setNewMovie(res.data._id);
    });
  };

  const handleDelete = async (id) => {
    await API.delete(`/movies/${id}`);
    setNewMovie(id)
  };

  useEffect(() => {
    getMovies();
  }, [newMovie]);

  return (
    <main className="movies">
      <ul>
        {movielist.map((movieelement) => (
          <li key={movieelement._id}>
            <img src={movieelement.cover} alt={movieelement.title} />
            <h2>{movieelement.title}</h2>
            <button onClick={() => handleDelete(movieelement._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title" ref={titleValue} />
        <input type="file" ref={fileValue} />
        <button type="submit">Create</button>
      </form>
    </main>
  );
};

export default Movies;
