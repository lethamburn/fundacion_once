import "./App.css";
import { useRef, useState } from "react";

const App = () => {
  const usernameInput = useRef(null);
  const [userNameError, setUserNameError] = useState("");
  const ageInput = useRef(null);
  const [ageError, setAgeError] = useState("");
  const [sucess, setSucess] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setUserNameError("");
    setAgeError("");
    //Comprobamos el usuario
    if (usernameInput.current.value.length < 3) {
      setUserNameError(
        "El nombre de usuario debe de tener 3 o más caracteres."
      );
    }
    if (ageInput.current.value < 18) {
      setAgeError("Debes de ser mayor de edad para entrar en la aplicación");
    }
    if (
      usernameInput.current.value.length >= 3 &&
      ageInput.current.value >= 18
    ) {
      setSucess("Registrado correctamente")
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" ref={usernameInput} />
        <div className="error">{userNameError}</div>
        <input type="number" ref={ageInput} />
        <div className="error">{ageError}</div>
        <button type="submit">Submit</button>
        <div>{sucess}</div>
      </form>
    </>
  );
};

export default App;
