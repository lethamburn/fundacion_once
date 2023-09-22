import "./Gallery.css";
import articulos from "../../data/data";
import { useState } from "react";
import Cart from "../Cart/Cart";
import Search from "../Search/Search";
import Articles from "../Articles/Articles";

const Gallery = () => {
  const [cart, setCart] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [items, setItems] = useState(articulos);

  const addItem = (item) => {
    setCart([...cart, item]);
    setTotalCart(totalCart + item.price);
  };

  const filtrarArticulos = (palabra) => {
    const nuevosArticulos = articulos.filter((item) =>
      item.name.toLowerCase().includes(palabra.toLowerCase())
    );
    setItems(nuevosArticulos);
  };

  return (
    <main>
      <Cart cart={cart} totalCart={totalCart} />
      <Search filtrarArticulos={filtrarArticulos} />
      <Articles items={items} addItem={addItem} />
    </main>
  );
};

export default Gallery;
