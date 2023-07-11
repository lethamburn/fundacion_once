//Una función que recibe por parámetro item y list
const addItem = (item, list) => {
  //Creamos una nueva promesa
  const promise = new Promise((resolve, reject) => {
    //Si no hay lista, rechazamos la promesa
    if (!list) {
      reject("No existe el array");
    }
    //Si se ha escapado del condicional de arriba, entonces
    setTimeout(function () {
      list.push(item);
      resolve(list);
    }, 2000);
  });
  return promise;
};

///////////////////////

const list = ["Rojo", "Azul", "Verde"];

addItem("Amarillo")
  .then((list) => {
    console.log(`El listado final es: ${list.join(", ")}`);
  })
  .catch((err) => {
    throw new Error(err);
  });
