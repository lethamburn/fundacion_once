const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  let total = 0;
  for (const element of param) {
    //Si el tipo de dato del elemento es un string...
    if (typeof element === "string") {
      //Le sumamos al total la longitud del string
      //En el caso de Rayo, el .length es 4
      total += element.length;
    } else {
      //Si no es un string me los sumas normal
      total += element;
    }
  }
  const quantity = param.length;
  console.log(total / quantity);
}

averageWord(mixedElements);
