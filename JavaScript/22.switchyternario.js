//Switch -> Hace comparaciones extrictamente iguales
const superheroe = 'Daredevil';

switch (superheroe) {
    case 'Spiderman':
        console.log('Me llamo Peter Parker');
        break;
    case 'Daredevil':
        console.log('Me llamo Matt Murdock');
        break;
    case 'Hulk':
        console.log('Me llamo Bruce Banner');
        break;
    default:
        console.log('No se como te llamas');
}

/* if(superheroe === "Spiderman"){
    console.log("Me llamo Peter Parker")
} else if(superheroe === "Daredevil"){
    console.log("Me llamo Matt Murdock")
} else if(superheroe === "Hulk"){
    console.log("Me llamo Bruce Banner")
} else{
    console.log("No se como te llamas")
} */

const age = 17;

if (age >= 18) {
    console.log('Puedes conducir');
} else {
    console.log('No puedes conducir');
}

//Ternario -> 

//1º Condicion
//2º Que pasa cuando se cumple
//3º Que pasa cuando no -> else
age >= 18 ? console.log('Puedes conducir') : console.log('No puedes conducir');

//AND operator
age >= 18 && console.log("Puedes conducir")

/* if(age >= 18){
    console.log("Puedes conducir")
} */
