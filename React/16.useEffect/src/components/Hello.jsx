import { useEffect, useState } from "react";

const Hello = () => {
  const [inputValue, setInputValue] = useState("");
  const [randomNum, setRandomNum] = useState(0);

  useEffect(() => {
    const num = Math.round(Math.random() * 100);
    setRandomNum(num);
  }, [inputValue]);

  return (
    <div>
      <h1>{inputValue}</h1>
      <h2>{randomNum}</h2>
      <input type="text" onInput={(ev) => setInputValue(ev.target.value)} />
    </div>
  );
};

export default Hello;
