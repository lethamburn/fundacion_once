import "./Register.css";
import { useContext, useRef } from "react";
import API from "../../services/API";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const { login } = useContext(UserContext);
  const usernameValue = useRef(null);
  const passwordValue = useRef(null);
  const fileValue = useRef(null);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    //Creamos un formdata para poder trabajar con multipartform
    const body = new FormData();
    body.append("username", usernameValue.current.value);
    body.append("password", passwordValue.current.value);
    body.append("avatar", fileValue.current.files[0]);
    //Hacemos la llamada indicandole el body que le vamos a pasar por post y las cabeceras, que en este caso son un multipart form
    API.post("/users/register", body, {
      headers: { "Content-Type": "multipart/form-data" },
    })
      .catch((error) => {
        console.log("NO PUEDO");
      })
      .then(() => {
        const loginBody = new FormData();
        loginBody.append("username", usernameValue.current.value);
        loginBody.append("password", passwordValue.current.value);
        //Hacemos login automático
        API.post("/users/login", loginBody)
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
          .catch((err) => alert("Cannot login"));
      });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" ref={usernameValue} />
        <input type="password" placeholder="Password" ref={passwordValue} />
        <input type="file" ref={fileValue} />
        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default Register;
