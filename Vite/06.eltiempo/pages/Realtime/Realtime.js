import "./Realtime.css";

const template = () => {
  return `
  <div>
  <input type="text" id="my-input" placeholder="City name..."/>
  <button id="my-btn">Search</button>
  </div>
  <article id="realtime-data"></article>
  `;
};

//ESTA FUNCION SE ENCARGA DE BUSCAR DATOS EN LA API
const getRealTimeData = async (city) => {
  //Hacemos la petición de los datos crudos, y hemos cambiado el valor de location por el argumento que le pasaremos a la función getRealTimeData
  const data = await fetch(
    `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=xASmtqdrf0smIvzBngVZDN9vPbfOyd6X`
  );
  //Parseamos los datos a json
  const dataJSON = await data.json();
  printData(dataJSON);
};

//ESTA FUNCION SE ENCARGA DE PINTAR LOS DATOS
const printData = (data) => {
  //Recuperamos el contendor
  const container = document.querySelector("#realtime-data");
  //Vamos a parsear la fecha en tipo fecha para poder utilizar los metodos, por ejemplo, toLocaleString
  const date = new Date(data.data.time);
  //Y aqui tenemos la fecha que nos devuelve la API formateada en España con los datos que queremos en el formato adecuado
  const formattedDate = date.toLocaleString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  container.innerHTML = `
  <h2>${data.location.name}</h2>
  <h3>${formattedDate}</h3>
  <h4 class="temperature">${data.data.values.temperature}º</h4>
  <h5>☔️ ${data.data.values.precipitationProbability}%</h5>
  <h5>💧 ${data.data.values.humidity}%</h5>
  <h5>💨 ${data.data.values.windSpeed} km/h</h5>
  `;
};

const Realtime = () => {
  document.querySelector("main").innerHTML = template();
  getRealTimeData("Madrid");
  //Recuperamos el input y el boton
  const myBtn = document.querySelector("#my-btn");
  const myInput = document.querySelector("#my-input");
  //Le damos funcionalidad al botón
  myBtn.addEventListener("click", () => {
    getRealTimeData(myInput.value)
  })
};

export default Realtime;
