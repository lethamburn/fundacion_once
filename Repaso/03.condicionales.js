//==
//===
//!=
//!==
//!
//>
//>=
//<
//>=
//&&
//||

const age = 180;

if (age > 0 && age < 18) {
  console.log("Te faltan petisuis");
} else if (age >= 18 && age <= 50) {
  console.log("Eres adulto/a");
} else if (age > 50 && age < 100) {
  console.log("Eres una dama o un caballero");
} else {
  console.log("Eres inmortal");
}

age >= 18
  ? console.log("Eres mayor de edad")
  : console.log("Eres menor de edad");

//AND OPERATOR
age >= 18 && console.log("Eres mayor de edad")