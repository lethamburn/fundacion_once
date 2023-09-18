import "./App.css";
import Title from "./components/Title/Title";
import Flex from "./components/Flex/Flex";

const App = () => {
  const text = "Esto es una propiedad";

  return (
    <>
      <Flex>
        <Title>{text}</Title>
      </Flex>
      <Flex>
        <p>Hola</p>
        <h2>Subtitulo</h2>
        <span>1234</span>
      </Flex>
      <Flex>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </Flex>
    </>
  );
};

export default App;
