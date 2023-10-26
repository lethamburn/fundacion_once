//Importamos el modulo "http"
const http = require("http");

//Creamos el servidor mediante el metodo de http createServer, y le implementamos en los parametros la petición y la respuesta
const server = http.createServer((req, res) => {
  //Configuramos la respuesta
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      results: [
        {
          id: 13,
          name: "Alien Googah",
          status: "unknown",
          species: "Alien",
          type: "",
          gender: "unknown",
          origin: {
            name: "unknown",
            url: "",
          },
          location: {
            name: "Earth (Replacement Dimension)",
            url: "https://rickandmortyapi.com/api/location/20",
          },
          image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
          episode: ["https://rickandmortyapi.com/api/episode/31"],
          url: "https://rickandmortyapi.com/api/character/13",
          created: "2017-11-04T20:33:30.779Z",
        },
        {
          id: 14,
          name: "Alien Morty",
          status: "unknown",
          species: "Alien",
          type: "",
          gender: "Male",
          origin: {
            name: "unknown",
            url: "",
          },
          location: {
            name: "Citadel of Ricks",
            url: "https://rickandmortyapi.com/api/location/3",
          },
          image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
          episode: ["https://rickandmortyapi.com/api/episode/10"],
          url: "https://rickandmortyapi.com/api/character/14",
          created: "2017-11-04T20:51:31.373Z",
        },
      ],
    })
  );
});

//Vamos a levantar el servidor -> Escuchar al servidor en un puerto local
server.listen(8080, () => {
  console.log("Servidor levantado en http://localhost:8080 ✌️");
});
