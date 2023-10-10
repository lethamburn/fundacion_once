import { memo } from "react";

const Header = memo(({ name, setName }) => {
  console.log("Renderizando Header");
  return (
    <header>
      <h2>{name}</h2>
      <input type="text" onInput={(ev) => setName(ev.target.value)} />
    </header>
  );
});

export default Header;
