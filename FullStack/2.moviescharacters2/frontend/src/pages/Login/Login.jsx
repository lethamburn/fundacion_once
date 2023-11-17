import './Login.css';

import { useContext, useRef } from 'react';

import API from '../../API/API';
import { UserContext } from '../../context/userContext';

const Login = () => {
  const { login } = useContext(UserContext);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const body = new FormData();
    body.append('username', usernameRef.current.value);
    body.append('password', passwordRef.current.value);

    API.post('/users/login', body).then((res) => {
      login(
        {
          username: res.data.username,
          avatar: res.data.avatar,
        },
        res.data.token,
      );
    });
  };

  return (
    <main className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" minLength={3} required ref={usernameRef} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" minLength={8} required ref={passwordRef} />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
