const Button = () => {
  const sayHello = () => {
    console.log("Hola!");
  };

  return <button onClick={sayHello}>Click</button>;
};

export default Button;
