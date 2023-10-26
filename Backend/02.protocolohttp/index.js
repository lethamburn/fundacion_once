const http = require("http");

//Almacenamos en una función todo el manejo de las diferentes respuestas que nos puede dar el servidor
const requestHandler = (req, res) => {
  //Con un condicional vamos a derivar nuestra respuesta dependiendo de las rutas que indiquemos en el navegador
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`
      <h1>Bienvenidos a mi server</h1>
      <p>Esta es la ruta principal en "/"</p>
    `);
  } else if (req.url === "/character") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(
      JSON.stringify({
        results: [
          {
            name: "Personaje1",
            status: "Muerto",
          },
          {
            name: "Personaje2",
            status: "Vivo",
          },
        ],
      })
    );
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.writeHead(200);
    res.end("Not Found");
  }
};

//Creamos el servidor
const server = http.createServer(requestHandler);

//Escuchamos al servidor
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});
