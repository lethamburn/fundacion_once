import "./Card.css";

const Card = ({ data }) => {
  return (
    <li>
      <img src={data.cover} alt={data.title} />
      <h3>{data.title}</h3>
      <h4>
        {data.company} - {data.year}
      </h4>
      <h4>{data.platform}</h4>
      <p>{data.price} </p>
    </li>
  );
};

export default Card;
