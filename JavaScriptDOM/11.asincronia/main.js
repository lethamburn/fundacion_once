const list = [];

const createName = (firstName) => {
  const newName = `${firstName} Addams`;
  //Esta función al final del todo ejecuta pushName, al ser funciones se esperan a terminar
  pushName(newName, list);
};

const pushName = (name, list) => {
  list.push(name);
  console.log(list);
};

createName("Miercoles");
