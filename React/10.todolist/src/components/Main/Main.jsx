import "./Main.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Main = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const newTodo = {
      title: inputValue,
      id: uuidv4(),
    };

    setList([...list, newTodo]);
    setInputValue("");
    console.log(list);
  };

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Write your task..."
          onInput={(ev) => setInputValue(ev.target.value)}
          value={inputValue}
        />

        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
