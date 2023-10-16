import "./App.css";
import StyledTitle from "./components/Title";
import Button from "./components/Button";
import Flex from "./components/Flex";

function App() {
  return (
    <>
      <StyledTitle>Esto es el titulo</StyledTitle>
      <Flex direction="column" gap="40px">
        <Button size="small">Click</Button>
        <Button variant="success">Click</Button>
        <Button variant="warning" size="large">
          Click
        </Button>
      </Flex>
    </>
  );
}

export default App;
