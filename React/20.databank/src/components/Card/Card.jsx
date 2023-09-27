import "./Card.css";

const Card = ({ item }) => {
  //Le hemos llamado item al prop para abstraer el componente y que pueda pintar tanto personajes, como droides, como planetas, etc... Lo que pinte se lo pasaremos desde fuera por item
  return (
    <li className="card">
      <img src={item.image} alt={item.name} loading="lazy" />
      <h3>{item.name}</h3>
    </li>
  );
};

export default Card;
