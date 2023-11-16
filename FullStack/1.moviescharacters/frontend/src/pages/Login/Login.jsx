import "./Login.css";
import API from "../../services/API";
import { useRef, useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //Almacenamos la funcionalidad del useNavigate
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const body = new FormData();
    body.append("username", usernameInput.current.value);
    body.append("password", passwordInput.current.value);
    API.post("/users/login", body)
      .then((res) => {
        login(
          {
            username: res.data.username,
            avatar: res.data.avatar,
            id: res.data.id,
          },
          res.data.token
        );
        navigate("/movies");
      })
      .catch((error) => {
        alert("USUARIO NO VALIDO");
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" ref={usernameInput} />
        <input type="password" placeholder="Password" ref={passwordInput} />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
