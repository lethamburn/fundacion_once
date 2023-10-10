import { MyContext } from "../context/context";
import { useContext } from "react";

const Header = () => {
  const { name } = useContext(MyContext);
  return (
    <header>
      <h1>Header</h1>
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
