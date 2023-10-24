//Importamos (o requerimos) puppeteer
import puppeteer from "puppeteer";
//Importamos fs
import fs from "fs";
//Importamos inquirer
import inquirer from "inquirer";

//Vamos a crear una función asíncrona que paso a paso vaya "moviendose" por la aplicación web
const scrapping = async (keyword) => {
  //Almacenamos la URL de la web
  const URL = "https://www.impericon.com/es";

  //Creamos el navegador ficticio
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  //Creamos una nueva pestaña en este navegador
  const page = await browser.newPage();
  //Vamos a navegar a la URL que hemos almacenado
  await page.goto(URL);
  //Ahora vamos a hacer click en el input de busqueda, y lo vamos a encontrar por su clase o id
  await page.click("#quicksearch");
  //Esperate dos segundos para que de tiempo a escribir
  await page.waitForTimeout(2000);
  //Una vez hemos hecho click en el input de busqueda, vamos a clicar en el segundo input;
  await page.click("#search");
  //Esperate dos segundos para que de tiempo a escribir
  await page.waitForTimeout(2000);
  //Escribimos nuestra busqueda
  await page.type("#search", keyword);
  //Clicamos en el botón de mostrar todos los resultados
  //Esperate dos segundos para que de tiempo a que cargue
  await page.waitForTimeout(2000);
  try {
    await page.click(".categories > div > button");
  } catch (error) {
    console.log("No existe");
    browser.close()
  }

  /*  //Vamos a clicar en el botón "Cargar más" siempre y cuando siga existiendo.
  const showMoreBtn =
    "t-flex.t-min-h-10.t-w-2/3.t-items-center.t-justify-center.t-rounded-sm.t-border.t-border-base-darkest.t-bg-transparent.t-px-4.t-text-xs.t-uppercase.t-text-base-darkest.t-webkit-tap-transparent.lg:t-w-1/4";
  let visible = true;
  while (visible) {
    try {
      await page.waitForTimeout(1000);
      await page.click(showMoreBtn);
    } catch (error) {
      visible = false;
    }
  } */
  //Con este metodo nos esperamos a que toda la aplicación termine de cargar
  await page.waitForTimeout(10000);
  //Accedemos con $$eval, que es un QuerySelectorAll, a cada una de las cartas de productos por su clase. Y por cada una de ellas a través de un mapeo generamos un nuevo array de objetos. Este array de objetos es lo que terminará siendo "cards"
  const cards = await page.$$eval(".product-listing > .product", (nodes) =>
    nodes.map((node) => ({
      title: node.querySelector(".t-leading-tight").innerText,
      price: node
        .querySelector(".price")
        .innerText.replace("tan bajo como", "")
        .trim(),
      photo: node.querySelector("img").dataset.src,
    }))
  );
  //Lo transformamos a JSON
  const cardsJSON = JSON.stringify(cards);
  //Escribimos un fichero con esta información
  fs.writeFile(`${keyword}.json`, cardsJSON, () => {
    console.log("Archivo generado!");
  });
  //Al final del todo cerramos el navegador
  browser.close();
};

//Lo que lanza el fichero index.js es inquirer
inquirer
  .prompt([
    {
      name: "bandName",
      message: "¿De qué banda quieres recuperar tus productos?",
    },
  ])
  .then((answers) => {
    scrapping(answers.bandName);
  });
