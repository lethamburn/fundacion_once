//Importamos las tres librerías
import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
import fs from "fs";

//Arrancamos la función de inquirer para que empiece a preguntar, almacenando las respuestas del usuario en los nombres de las mismas
inquirer
  .prompt([
    {
      name: "name",
      message: "¿Cómo te llamas?",
    },
    {
      type: "list",
      name: "job",
      message: "¿Cuál es tu puesto?",
      choices: ["MERN", "MEAN", "MEARN", "Frontend", "Backend"],
    },
    {
      name: "description",
      message: "Describete brevemente",
    },
    {
      name: "email",
      message: "¿Cuál es tu correo electrónico?",
    },
  ])
  .then((answers) => {
    //Creamos un mensaje de carga (LOADING) con ora y lo arrancamos
    const spinner = ora("Loading unicorns").start();
    //Hacemos el destructuring
    const { name, job, description, email } = answers;
    //Despues del destructuring vamos a generar un Markdown
    const markdown = `
# ${name}
## ${job}
${description}
📭 Contact me: ${email}
    `;
    //Creamos el archivo md
    fs.writeFile("README.md", markdown, () => {
      spinner.stop();
    });
  });
