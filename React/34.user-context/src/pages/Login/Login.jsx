import "./Login.css";
import { useContext, useRef } from "react";
import { UserContext } from "../../context/usercontext";

const Login = () => {
  const inputValue = useRef(null);
  const { login } = useContext(UserContext);
  return (
    <main>
      <input type="text" placeholder="Username" ref={inputValue} />
      <button onClick={() => login(inputValue.current.value)}>Login</button>
    </main>
  );
};

export default Login;
