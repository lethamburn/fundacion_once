import { useParams } from "react-router-dom";
import "./DatabankDetail.css";
import { useState, useEffect } from "react";

const DatabankDetail = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  const getItem = async () => {
    const localCategory = localStorage.getItem("category");
    const data = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/${localCategory}/${id}`
    );
    const dataJSON = await data.json();
    setItem(dataJSON);
  };

  useEffect(() => {
    getItem();
  }, []);

  if (item) {
    return (
      <main className="databankDetail">
        <div>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <h2>Loading...</h2>
      </main>
    );
  }
};

export default DatabankDetail;
