//Bucles básicos
const alumnos = ["Sergio", "Javier", "Isabel", "David"];
//LONGITUD -> 4
//POSICIONES -> 0, 1, 2 ,3

//1ª configuración -> Inicializamos i en 0 para que empiece desde el principio
//2º configuración -> Hasta donde va a dar vueltas el bucle
//3ª configuración -> Que le pasa a la i después de cada vuelta
for (let i = 0; i < alumnos.length; i++) {
	//Almacenamos cada alumno individualmente: alumnos[0], alumnos[1]...
	const alumno = alumnos[i];
	//Los sacamos por consola
	console.log(alumno, i);
}

const family = ["Gomez", "Morticia", "Cosa", "Miercoles", "Fetido"];

for (let i = 0; i < family.length; i++) {
	const member = family[i];
	console.log(member + " Addams");
}
