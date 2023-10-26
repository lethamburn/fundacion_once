const http = require("http");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.writeHead(200);
    res.end("Nodemon es la mejor libreria");
  }
};

const server = http.createServer(requestHandler);

const PORT = 8080;

server.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:8080");
});
