const firstName: string = "Peter";
const age: number = 2;
const alive: boolean = true;

const alimentos: string[] = ["papas", "pipas", "agua", "cocacola"];
const numbers: number[] = [1, 2, 3, 4];
const mix: (number | string)[] = [1, "hola"];

const arraygenerico: Array<string | number> = ["sadngasdg", "sdgsdg"];

//Enums
enum alumnos {
  Mauricio = "Mauricio el alumno",
  Oscar = "Oscar Perea",
  Monica = "Monica Ayala",
  Gonzalo = "Gonzalo Abad",
}

let alumnoElegido: alumnos = alumnos.Mauricio;
console.log(alumnoElegido);

//Funciones
const sayHello = (name: string): string => {
  return "Hola " + name;
};

sayHello("Antonio");
