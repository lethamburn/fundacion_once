import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";


export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate()
  //Creamos el estado del usuario y lo inicializamos de manera lazy
  const [user, setUser] = useState(() => {
    //Nos intentamos traer el usuario que este almacenado en el localStorage
    const savedUser = localStorage.getItem("user");
    //Lo parseamos para tener un objeto del json
    const initialValue = JSON.parse(savedUser);
    return initialValue || null;
  });

  //Creamos el estado del token
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");
    return savedToken || null;
  });

  //LOGOUT
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/")
  };

  const login = (resUser, resToken) => {
    setUser(resUser);
    setToken(resToken);
    localStorage.setItem("user", JSON.stringify(resUser));
    localStorage.setItem("token", resToken);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
