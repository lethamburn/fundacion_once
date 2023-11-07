//Importamos mongoose
const mongoose = require("mongoose");
//Importamos el modelo Character
const Character = require("./models/character.model");

//Almacenamos la URI de Mongo
const MONGO_URI =
  "mongodb+srv://lethamburn:FundacionOnce2023@cluster0.yw6jcyi.mongodb.net/spidermandb?retryWrites=true&w=majority";

//Almacenamos nuestro array de información
const spidermanCharacters = [
  {
    name: "Peter Parker",
    role: "Superhero",
    alterEgo: "Spider-Man",
    superpowers: ["Wall-crawling", "Superhuman strength", "Web-slinging"],
  },
  {
    name: "Mary Jane Watson",
    role: "Love interest",
    alterEgo: "None",
    superpowers: [],
  },
  {
    name: "Harry Osborn",
    role: "Supporting character",
    alterEgo: "Green Goblin",
    superpowers: ["Superhuman strength", "Insanity"],
  },
  {
    name: "Aunt May",
    role: "Supporting character",
    alterEgo: "None",
    superpowers: [],
  },
  {
    name: "Gwen Stacy",
    role: "Love interest",
    alterEgo: "None",
    superpowers: [],
  },
  {
    name: "J. Jonah Jameson",
    role: "Antagonist",
    alterEgo: "None",
    superpowers: [],
  },
  {
    name: "Doctor Octopus",
    role: "Villain",
    alterEgo: "Otto Octavius",
    superpowers: ["Mechanical tentacles", "Genius-level intellect"],
  },
  {
    name: "Green Goblin",
    role: "Villain",
    alterEgo: "Norman Osborn",
    superpowers: ["Superhuman strength", "Goblin Glider"],
  },
  {
    name: "Black Cat",
    role: "Antihero",
    alterEgo: "Felicia Hardy",
    superpowers: ["Bad luck generation", "Acrobatics"],
  },
  {
    name: "Rhino",
    role: "Villain",
    alterEgo: "Aleksei Sytsevich",
    superpowers: ["Superhuman strength", "Durable rhinoceros-like suit"],
  },
  {
    name: "Electro",
    role: "Villain",
    alterEgo: "Max Dillon",
    superpowers: ["Electricity manipulation", "Superhuman durability"],
  },
  {
    name: "Sandman",
    role: "Villain",
    alterEgo: "Flint Marko",
    superpowers: ["Shape-shifting sand body", "Superhuman strength"],
  },
  {
    name: "Vulture",
    role: "Villain",
    alterEgo: "Adrian Toomes",
    superpowers: ["Wingsuit with superhuman strength", "Flight"],
  },
  {
    name: "Mysterio",
    role: "Villain",
    alterEgo: "Quentin Beck",
    superpowers: ["Illusion projection", "Special effects expertise"],
  },
  {
    name: "Kraven the Hunter",
    role: "Villain",
    alterEgo: "Sergei Kravinoff",
    superpowers: ["Peak human physical abilities", "Master hunter"],
  },
];

//En base al modelo Character vamos a crear un Character por cada uno de los personajes que tengamos en el array "normal":
const characters = spidermanCharacters.map(
  (character) => new Character(character)
);

//Nos conectamos a mongoose
mongoose
  .connect(MONGO_URI)
  .then(async () => {
    //Vamos a encontrar todos los personajes que existen YA en la base de datos
    const existingCharacters = await Character.find();
    //Si en la base de datos ya existen personajes en la colección los vamos a borrar
    if (existingCharacters.length) {
      await Character.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    //Por cada uno de los personajes de mi array de tipo Character vamos a insertar cada uno de ellos en la base de datos
    await Character.insertMany(characters);
  })
  .catch((err) => console.log(`Error inserting data: ${err}`))
  //Finalmente nos desconectamos de la base de datos
  .finally(() => mongoose.disconnect());
