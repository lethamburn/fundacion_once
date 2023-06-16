//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne, numberTwo) {
  //Le ponemos >= para también contemplar que sean iguales, en el caso de que sean iguales enseñaremos tambien el numberOne porque nos da un poco igual cual sea
  if (numberOne >= numberTwo) {
    console.log(numberOne);
  } else {
    console.log(numberTwo);
  }
}

sum(2, 5);
sum(10, 1);
sum(4, 4);
