const humans = ["🧑", "🧑", "🧑", "🧑", "🧑"];

const zombies = humans.map((human) => "🧟");
console.log(zombies);

const numbers = [1, 2, 3, 4, 5, 6];
const numbersx2 = numbers.map((num) => num * 2);
console.log(numbersx2);

const movies = [
  {
    title: "Evangelion 111",
    director: "Hideo Anaka",
    year: 2003,
  },
  {
    title: "The Matrix",
    director: "Wachowskis",
    year: 1999,
  },
  {
    title: "The Batman",
    director: "Matt Reeves",
    year: 2022,
  },
];

const newMovies = movies.map((movie) => ({
  titulo: movie.title,
  director: movie.director,
  like: true,
}));

console.log(newMovies);
