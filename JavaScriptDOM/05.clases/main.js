//Creamos un elemento h1
const heading = document.createElement("h1");
//Añadimos un texto
heading.innerHTML = "Soy el título";
//Añadimos el h1 al documento
document.body.appendChild(heading);
//Añadimos la clase "title"
heading.classList.add("title");
heading.classList.add("special");

heading.classList.remove("special");

console.log(heading.classList.contains("special"));

heading.classList.toggle("dark");
heading.classList.toggle("dark");
heading.classList.toggle("dark");
