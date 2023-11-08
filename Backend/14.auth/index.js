const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const connect = require("./src/utils/db");

const server = express();
connect();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

//Routes
const UserRouter = require("./src/api/routes/user.routes");
server.use("/users", UserRouter);

server.use("*", (req, res) => {
  return res.status(404).json("Not found");
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
