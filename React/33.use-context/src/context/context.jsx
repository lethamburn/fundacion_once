import { createContext, useState } from "react";

//Creamos el contexto con el nombre que queramos, según la lógica de la aplicación
export const MyContext = createContext();

//Creamos el componente con el que vamos a envolver a toda la aplicación con la que queremos compartir la información
export const MyContextProvider = ({ children }) => {
  const [name, setName] = useState("Peter");

  return (
    <MyContext.Provider value={{ name, setName }}>
      {children}
    </MyContext.Provider>
  );
};
//En el retorno usamos el metodo Provider para entregarle a los children la información que indicamos en value
