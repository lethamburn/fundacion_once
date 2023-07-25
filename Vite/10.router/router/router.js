//Importamos todas las páginas
import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";

//Creamos un array de objetos con las rutas y las paginas de cada una de las partes de la aplicación
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/about",
    component: About,
  },
];

//A partir de aquí hay dos funciones, una que enruta nuestros componentes y la otra que da funcionalidad a nuestros anchors
export const router = () => {
  //Almacenar y detectar cual es la ruta del navegador, por ejemplo, si estamos en /gallery nos devolverá en path: "/gallery"
  const path = window.location.pathname;
  //Con destructuring sacamos la propiedad component del resultado de hacer una busqueda que el path del array routes coincida con el path que acabamos de almacenar
  const { component } = routes.find((route) => route.path === path) || {
    component: NotFound,
  };
  //Si existe la propiedad component imprimimos ese componente en el main.
  if (component) {
    component();
  }
};

//Vamos a añadirle un evento popstate a window para que lance la función router cada vez que vayamos hacia adelante o hacia atrás en el navegador
window.addEventListener("popstate", router);

//Vamos a añadirle un evento DomContentLoaded al documento para cargar la página cada vez que se actualice el contenido del main
document.addEventListener("DOMContentLoaded", router);

//Creamos la función que añade la funcionalidad a los anchors
export const addLinkListeners = () => {
  //Recuperamos los anchors del navbar
  const navLinks = document.querySelectorAll("nav a");
  //Recorremos los anchors y le damos un evento click a cada uno de ellos
  navLinks.forEach((link) => {
    //Le añadimos a cada uno un evento click
    link.addEventListener("click", (ev) => {
      //Quitamos el comportamiento por defecto de los links para que no recargue la pagina
      ev.preventDefault();
      //Recuperamos el enlace que tiene cada uno de los links en el href
      const href = link.getAttribute("href");
      //Vamos a controlar el historial de navegación empujando un nuevo estado al cambiar la URL pero sin recargar la página
      history.pushState(null, null, href);
      //Disparamos de nuevo la función router para que pinte el elemento correspondiente en nuestra aplicación
      router();
    });
  });
};
