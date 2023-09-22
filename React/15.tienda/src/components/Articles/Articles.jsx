const Articles = ({ items, addItem }) => {
  return (
    <ul>
      {items.length > 0  ? (
        items.map((articulo) => (
          <li key={articulo.name}>
            <img src={articulo.photo} alt={articulo.name} />
            <h4>{articulo.name}</h4>
            <p>{articulo.description}</p>
            <p>{articulo.price} €</p>
            <button onClick={() => addItem(articulo)}>Añadir</button>
          </li>
        ))
      ) : (
        <h2>
          No hay ningún artículo que coincida con la busqueda, prueba otra vez.
        </h2>
      )}
    </ul>
  );
};

export default Articles;
