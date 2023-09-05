function sayHelloWithName(firstName) {
  const quote = "Hola " + firstName;
  return quote;
}

//const x = () => {}

const sayHelloWithNameArrow = (firstName) => {
  const quote = "Hola " + firstName;
  return quote;
};

const objeto = {
  name: "Primer objeto",
  launch: () => {
    console.log("Hola");
  },
};

const calculateAge = (userData) => {
  const age = userData.currentYear - userData.bornYear;
  console.log(
    userData.firstName + " " + userData.lastName + " tiene " + age + " años."
  );
};

const user = {
  currentYear: 2023,
  bornYear: 1990,
  firstName: "Antonio",
  lastName: "Rosales",
};

calculateAge({
  currentYear: 2023,
  bornYear: 1990,
  firstName: "Antonio",
  lastName: "Rosales",
});

//Recursividad

const loop = (counter) => {
  console.log("El contador está en: ", counter);
  counter++;
  if (counter >= 10) {
    console.log("Se acabó");
  } else {
    loop(counter);
  }
};

loop(0);
