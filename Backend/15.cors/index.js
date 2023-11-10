const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(
  cors({
    origin: "http://127.0.0.1:5500",
    optionsSuccessStatus: 200,
  })
);

server.use("/", (req, res, next) => {
  return res.status(200).json("OK");
});

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
