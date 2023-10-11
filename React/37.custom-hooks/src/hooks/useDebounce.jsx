import { useEffect, useState } from "react";

//Creamos el hook useDebounce que recibe por argumento un value y un delay.
//Es decir, el valor a atrasar y el tiempo que se atrasa
const useDebounce = (value, delay) => {
  //El estado inicial de "debouncedValue" es el value del argumento
  const [debouncedValue, setDebouncedValue] = useState(value);

  //El efecto secundario de useDebounce es setear debouncedValue con el valor que le estamos pasando y el numero de milisegundos
  useEffect(() => {
    //Atrasamos el seteo del value con el tiempo del delay
    const timer = setTimeout(() => setDebouncedValue(value), delay || 200);
    return () => {
      clearTimeout(timer);
    };
    //Estamos vigilando en el useEffect value y delay, si estos cambian se vuelve a relanzar el useEffect entero
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
