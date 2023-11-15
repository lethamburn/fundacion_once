import "./Register.css";
import { useRef } from "react";

const Register = () => {
  const usernameValue = useRef(null);
  const passwordValue = useRef(null);
  const fileValue = useRef(null);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const body = new FormData();
    body.append("username", usernameValue.current.value);
    body.append("password", passwordValue.current.value);
    body.append("avatar", fileValue.current.files[0]);

    const res = await fetch("http://localhost:8080/users/register", {
      body,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res)
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
