import './style.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const app = document.querySelector("#app");
app.innerHTML = `
${Header()}
${Main()}
${Footer()}
`