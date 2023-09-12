import "./style.css";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery"
import Footer from "./components/Footer/Footer";

const app = document.querySelector("#app");
app.innerHTML = `
${Header()}
<main></main>
${Footer()}
`;

//Una vez la aplicación esté pintada en el documento, vamos a disparar Gallery para que se pinte su contenido y añada su funcionalidad
Gallery()