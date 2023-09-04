//
function sayHello() {
  console.log("Hola");
}

//
function sayHelloWithName(firstName) {
  console.log("Hola " + firstName);
}

sayHelloWithName("Antonio");

//

function simpsonsCharacter(firstName, lastName = "Simpson") {
  console.log(firstName + " " + lastName);
}

simpsonsCharacter("Homer");

//
function sum(numA, numB) {
  if (typeof numA === "number" && typeof numB === "number") {
    console.log(numA + numB);
  } else {
    console.log("Por favor, utiliza numeros");
  }
}

//

function resta(numA, numB) {
  if (typeof numA === "number" && typeof numB === "number") {
    return numA - numB;
  } else {
    return;
  }
}

sum(4, 5);
sum("4", 5);

const resultado4menos1 = resta(4, 1);
console.log(resultado4menos1);

//Recursividad

function cincoVueltas(contador) {
  contador++;
  console.log("CONTADOR: ", contador);
  if (contador >= 5) {
    return;
  } else {
    cincoVueltas(contador);
  }
}

cincoVueltas(0);

//

const alimentos = ["Patata", "Pimiento", "Huevo"];

function bucleCustom(i, array) {
  const alimento = array[i];
  console.log(alimento);
  i++;
  if (i < array.length) {
    bucleCustom(i, array);
  } else {
    return;
  }
}

bucleCustom(0, alimentos);
