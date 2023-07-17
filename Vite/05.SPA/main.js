import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import About from "./pages/About/About";

//Renderizamos Header
Header();
//Renderizamos Footer
Footer();
//Por defecto, vamos a pintar Home la primera vez que entremos
Home();

//Vamos a añadirle un evento click a cada uno de los links
document.querySelector("#home-link").addEventListener("click", Home);
document.querySelector("#gallery-link").addEventListener("click", Gallery);
document.querySelector("#about-link").addEventListener("click", About);

//Vamos a añadirle un evento al botón del tema
document.querySelector("#theme-btn").addEventListener("click", () => {
  //Vamos a recuperar el botón
  const btn = document.querySelector("#theme-btn");
  //Cambiamos el tema del body
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    //Si el body tiene la clase dark:
    localStorage.setItem("theme", "dark");
    btn.innerHTML = "☼";
  } else {
    localStorage.removeItem("theme");
    btn.innerHTML = "☾";
  }
});

//Vamos a definir como arranca el botón del tema al arrancar la aplicación y el tema que tiene que tener
if (localStorage.getItem("theme")) {
  //Si hay algo en localStorage entonces ponemos el tema oscuro y el sol en el botón
  document.querySelector("#theme-btn").innerHTML = "☼";
  document.body.classList.add("dark");
}
