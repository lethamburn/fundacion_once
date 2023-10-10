import { memo } from "react";

const Card = memo(({ age, setAge }) => {
  console.log("Renderizando Card");
  return (
    <div>
      <h3> {age >= 18 ? "Mayor de edad" : "Menor de edad"}</h3>
      <input type="number" onInput={(ev) => setAge(ev.target.value)} />
    </div>
  );
});

export default Card;
