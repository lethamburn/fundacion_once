//Recuperamos el contenedor main
const main = document.querySelector("main");

const URL =
  "https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}";

const getProducts = async () => {
  //Nada más que empieza la petición vamos a pintar un Loading...en el main
  main.innerHTML = "<h2>Loading...</h2>"
  //Primero recuperamos los datos crudos y esperamos a que termine
  const data = await fetch(URL);
  //Lo siguiente es transformar los datos a json para que podamos tratarlos
  const dataJSON = await data.json();
  const products = dataJSON.data.products.edges;
  //Al terminar nuestra petición vaciamos el main para que printProducts se encargue de rellenarlo con los articulos
  main.innerHTML = ""
  //Ejecutamos al terminar getProducts la función printProducts
  printProducts(products);
};

const printProducts = (products) => {
  //Desgranamos la información que vamos a utilizar para poder tener objetos en nuestro array mas sencillos
  const newProducts = products.map((product) => ({
    name: product.node.title,
    image: product.node.featuredImage.url,
    price: product.node.variants.edges[0].node.price.amount,
  }));
  //Recorremos el nuevo array
  for (const product of newProducts) {
    //Creamos un articulo vacio por cada uno de los productos
    const article = document.createElement("article");
    //Le damos contenido HTML
    article.innerHTML = `
    <img src='${product.image}' alt='${product.name}' loading="lazy"/>
    <h3>${product.name}</h3>
    <h4>${product.price}€</h4>
    `;
    //Cada uno de estos article lo vamos a inyectar en el contenedor main
    main.appendChild(article);
  }
};

//Ejecutamos la función que obtiene los datos de la API
getProducts();
