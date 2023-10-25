//Importamos inquirer
import inquirer from "inquirer";
import fs from "fs";

const emptyPackageJSON = {
  name: "",
  version: "",
  type: "",
  description: "",
  main: "index.js",
  scripts: {
    dev: "node index.js",
  },
  keywords: [],
  author: "",
  license: "",
};

inquirer
  .prompt([
    {
      name: "name",
      message: "¿Cual es el nombre del proyecto?",
      default: "my_project",
    },
    {
      name: "version",
      message: "¿Cuál es la versión del proyecto?",
      default: "0.0.1",
    },
    {
      type: "list",
      name: "module",
      message: "¿Tu proyecto es modular?",
      choices: ["Si", "No"],
    },
    {
      name: "description",
      message: "Describe tu proyecto",
    },
    {
      name: "author",
      message: "¿Cómo te llamas?",
    },
  ])
  .then((answers) => {
    const { name, version, module, description, author } = answers;
    //Modificamos el objeto original
    emptyPackageJSON.name = name;
    emptyPackageJSON.version = version;
    emptyPackageJSON.type = module === "Si" ? "module" : "";
    emptyPackageJSON.description = description;
    emptyPackageJSON.author = author;

    fs.writeFile("newpackage.json", JSON.stringify(emptyPackageJSON), () => {
      console.log("package.json generado!");
    });
  });
