var firstName = "Peter";
var age = 2;
var alive = true;
var alimentos = ["papas", "pipas", "agua", "cocacola"];
var numbers = [1, 2, 3, 4];
var mix = [1, "hola"];
var arraygenerico = ["sadngasdg", "sdgsdg"];
//Enums
var alumnos;
(function (alumnos) {
    alumnos["Mauricio"] = "Mauricio el alumno";
    alumnos["Oscar"] = "Oscar Perea";
    alumnos["Monica"] = "Monica Ayala";
    alumnos["Gonzalo"] = "Gonzalo Abad";
})(alumnos || (alumnos = {}));
var alumnoElegido = alumnos.Mauricio;
console.log(alumnoElegido);
