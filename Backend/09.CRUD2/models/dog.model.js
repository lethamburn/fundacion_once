//Importamos mongoose
const mongoose = require("mongoose");

//Creamos el esquema con las propiedades que queramos para nuestros objetos
const DogSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    breed: { type: String, required: false, trim: true },
    age: { type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

//Creamos el modelo indicandole el nombre del modelo y el esquema que utiliza
const Dog = mongoose.model("dog", DogSchema);

//Lo exportamos
module.exports = Dog;
