//Almacenamos la URL
const URL =
  "https://starwars-databank-server.vercel.app/api/v1/characters?page=1&limit=200";

//Vamos a definir la función asíncrona que recupera los datos de la API
const getCharacters = async () => {
  //Primero obtenemos los datos con fetch de la URL
  const data = await fetch(URL);
  //Después los convertimos a JSON
  const result = await data.json();
  //Nos quedamos con el array de objetos que nos interesaba
  const characters = result.data;
  //Ejecutamos printCharacters y le pasamos characters en el argumento list
  printCharacters(characters);
};

const printCharacters = (list) => {
  //Recuperamos el container de HTML
  const container = document.querySelector("#container");
  //Recorremos la lista
  for (const character of list) {
    //Por cada uno de los personajes creamos un div
    const div = document.createElement("div");
    //Le damos la clase "card" a todos los divs
    div.classList.add("card");
    //A cada uno de estos divs le vamos a dar contenido interno de HTML
    div.innerHTML = `
      <img src=${character.image} alt='${character.name}' />
      <h2>${character.name}</h2>
      <p>${character.description}</p>
    `;
    //Por último, en cada una de las vueltas del bucle, insertamos estos divs en el container
    container.appendChild(div);
  }
};

//Lo único que ejecuta nuestro script es getCharacters()
getCharacters();
