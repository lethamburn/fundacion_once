//Creando un nuevo nodo - elemento
const myH1 = document.createElement("h1");
//Vamos a añadirle texto
myH1.innerHTML = "Soy el título";
console.log(myH1);
//Añadiendo el elemento al documento
document.body.appendChild(myH1);

//

//Creamos una sección nueva
const mySection = document.createElement("section");
//Creamos una imagen nueva
const myImage = document.createElement("img");
//Como son objetos, alteramos los atributos de la imagen como si fueran las claves de un objeto
myImage.src =
  "https://www.egames.news/__export/1670806209895/sites/debate/img/2022/12/11/batman-logo_1.jpg_976912859.jpg";
myImage.alt = "Batman";

//Vamos a meter la imagen en la seccion
mySection.appendChild(myImage);
//Al body le hacemos como hijo la seccion
document.body.appendChild(mySection);
