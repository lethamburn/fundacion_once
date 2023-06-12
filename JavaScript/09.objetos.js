let television = {
	marca: "Synetech",
	color: "Negro",
	ancho: 210,
	alto: 130,
	tactil: true,
};

//Acceder a las claves del objeto
console.log(television.marca);
console.log(television["marca"]);

//Modificar los valores de las claves
television.marca = "Sony";
console.log(television);

//Crear nuevas claves en el objeto
television.precio = 3000;
console.log(television);

//Eliminar una clave en el objeto
delete television.tactil;

console.log(television);
