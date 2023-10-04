import "./Header.css";
import { useState } from "react";

const Header = ({ title, setBandName }) => {
  const [inputValue, setInputValue] = useState("");

  const changeBandName = () => {
    setBandName(inputValue);
    setInputValue("");
  };

  return (
    <header>
      <h1>{title}</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onInput={(ev) => setInputValue(ev.target.value)}
        />
        <button onClick={changeBandName}>Search</button>
      </div>
    </header>
  );
};

export default Header;
