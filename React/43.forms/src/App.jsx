import "./App.css";
import { useRef } from "react";

function App() {
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = (ev) => {
    //Vamos a prevenir o eliminar el comportamiento por defecto de un evento submit, que es recargar la aplicación
    ev.preventDefault();
    //Comprobamos que los campos tienen algun valor
    if (
      usernameInput.current.value === "" ||
      passwordInput.current.value === ""
    ) {
      alert("Completa los campos");
    } else if (usernameInput.current.value.length < 4) {
      alert("Tu nombre de usuario debe tener más de 4 caracteres");
    } else {
      alert("LOGUEADO CORRECTAMENTE");
      console.log(usernameInput.current.value, passwordInput.current.value);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={usernameInput} />
        <input type="password" ref={passwordInput} />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default App;
