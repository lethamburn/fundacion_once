const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./src/utils/db");
const { configCloudinary } = require("./src/middlewares/file.middleware");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

connect();
configCloudinary();

//Routes
const AlbumRouter = require("./src/api/routes/album.routes");
server.use("/albums", AlbumRouter);

server.use("*", (req, res) => {
  return res.status(404).json({
    error: "Aqui no es!",
  });
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
