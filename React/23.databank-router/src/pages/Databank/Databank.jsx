import { NavLink } from "react-router-dom";
import "./Databank.css";
import { useState, useEffect } from "react";

const Databank = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("characters");

  const getItems = async () => {
    const data = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/${category}?page=${page}&limit=30`
    );
    const dataJSON = await data.json();
    setItems([...items, ...dataJSON.data]);
  };

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
    setItems([]);
    setPage(1);
    localStorage.setItem("category", newCategory);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setPage(page + 1);
  };

  useEffect(() => {
    //Le añadimos la función que controla el scroll infinito a la pantalla, se lo ponemos en el useEffect para que lo aplique nada mas arrancar
    window.addEventListener("scroll", handleScroll);

    getItems();
  }, [page, category]);

  useEffect(() => {
    localStorage.setItem("category", "characters");
  }, []);

  return (
    <main className="databank">
      <div>
        <label>Category</label>
        <select onChange={(ev) => changeCategory(ev.target.value)}>
          <option value="characters">Characters</option>
          <option value="creatures">Creatures</option>
          <option value="droids">Droids</option>
          <option value="organizations">Organizations</option>
          <option value="species">Species</option>
          <option value="vehicles">Vehicles</option>
        </select>
      </div>
      <ul className="gallery">
        {items.map((item) => (
          <li key={item._id}>
            <NavLink to={`/databank/${item._id}`}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </NavLink>
          </li>
        ))}
      </ul>
      
    </main>
  );
};

export default Databank;
