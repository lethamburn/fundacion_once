import './style.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { router, addLinkListeners } from './router/router'

Header()
Footer()

//Lanzamos con la apertura de la aplicación nuestro router para que detecte las paginas
router()
//Y además le añadimos el escuchador de eventos a los anchor
addLinkListeners()