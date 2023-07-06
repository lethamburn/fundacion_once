//Creamos un array
const superheroes = [
  {
    name: "Batman",
    realName: "Bruce Wayne",
    age: 35,
    city: "Gotham City",
    image:
      "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/03/batman-1.jpg?fit=1600%2C1067&quality=50&strip=all&ssl=1",
  },
  {
    name: "Robin",
    realName: "Dick Grayson",
    age: 22,
    city: "Gotham City",
    image:
      "https://www.akiracomics.com/imagenes/poridentidad?identidad=e825f329-5e00-49d6-a7a1-dfcbdc06dcaa&ancho=850&alto=",
  },
  {
    name: "Nightwing",
    realName: "Dick Grayson",
    age: 28,
    city: "Blüdhaven",
    image:
      "https://comicvine.gamespot.com/a/uploads/scale_small/11156/111564182/8867979-nightwingmora2.jpg",
  },
  {
    name: "Batgirl",
    realName: "Barbara Gordon",
    age: 25,
    city: "Gotham City",
    image:
      "https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2016/01/BATGIRL-COVER-1024x576.jpg?resize=747%2C420",
  },
  {
    name: "Red Hood",
    realName: "Jason Todd",
    age: 24,
    city: "Gotham City",
    image:
      "https://images.comicbooktreasury.com/wp-content/uploads/2021/04/Jason-Todd-Red-Hood-Reading-Order.jpg",
  },
  {
    name: "Catwoman",
    realName: "Selina Kyle",
    age: 30,
    city: "Gotham City",
    image:
      "https://www.mundodeportivo.com/alfabeta/hero/2022/03/Descubre-como-se-veian-los-primeros-disenos-de-Catwoman-para-los-comics-de-Batman.jpg?width=1200",
  },
  {
    name: "Oracle",
    realName: "Barbara Gordon",
    age: 28,
    city: "Gotham City",
    image:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/Barbara-Oracle.jpg",
  },
];

//Creamos una lista
const ul = document.createElement("ul");

for (const superheroe of superheroes) {
  //Por cada uno de los superheroes creamos un li
  const li = document.createElement("li");
  //Le damos el contenido interno correspondiente a la vuelta de bucle
  li.innerHTML = `
  <img src=${superheroe.image} alt=${superheroe.name}/>
  <h3>${superheroe.name} - ${superheroe.realName}</h3>
  <p>${superheroe.age}</p>
  <p>${superheroe.city}</p>
  `;
  //Lo metemos en la lista
  ul.appendChild(li);
}

//Una vez terminado el bucle, insertamos la lista en el documento
document.body.appendChild(ul);
