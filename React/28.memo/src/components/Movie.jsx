import { memo } from "react";

const Movie = memo(({ title, poster }) => {
  console.log("Renderizando Movie...");
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} alt={title} width={200} />
    </div>
  );
});
export default Movie;
