const movies = [
  {
    title: "Inception",
    genre: "Science Fiction",
    rating: 8.8,
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    rating: 8.9,
  },
  {
    title: "Fight Club",
    genre: "Drama",
    rating: 8.8,
  },
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    rating: 9.3,
  },
  {
    title: "The Godfather",
    genre: "Crime",
    rating: 9.2,
  },
  {
    title: "The Matrix",
    genre: "Action",
    rating: 8.7,
  },
  {
    title: "Interstellar",
    genre: "Science Fiction",
    rating: 8.6,
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    rating: 8.8,
  },
  {
    title: "The Avengers",
    genre: "Action",
    rating: 8.0,
  },
  {
    title: "The Lion King",
    genre: "Animation",
    rating: 8.5,
  },
  {
    title: "Titanic",
    genre: "Drama",
    rating: 7.8,
  },
];

const scifiMovies = movies.filter((movie) => movie.genre === "Science Fiction");
console.log(scifiMovies);

/* const scifi_Movies = [];
for (let i = 0; i < movies.length; i++) {
  const movie = movies[i];
  if (movie.genre === "Science Fiction") {
    scifi_Movies.push(movie);
  }
}

console.log(scifi_Movies); */

const masterpieces = movies.filter((movie) => movie.rating > 9);
console.log(masterpieces);
