import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Forecast from "./pages/Forecast/Forecast";
import Realtime from "./pages/Realtime/Realtime";
import linkPage from "./utils/linkPage";

Header();
Footer();

Home();

linkPage("#home-link", Home);
linkPage("#realtime-link", Realtime);
linkPage("#forecast-link", Forecast);

//Hemos sustituido las funciones de abajo por linkPage porque son repetitivas y asi acortamos su implementacion
/* document.querySelector("#home-link").addEventListener("click", Home);

document.querySelector("#realtime-link").addEventListener("click", Realtime);

document.querySelector("#forecast-link").addEventListener("click", Forecast); */
