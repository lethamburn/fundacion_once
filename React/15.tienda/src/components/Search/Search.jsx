const Search = ({filtrarArticulos}) => {
  return (
    <>
      <h2>Nuestros artículos</h2>
      <input
        type="text"
        placeholder="Busca artículos"
        onInput={(ev) => filtrarArticulos(ev.target.value)}
      />
    </>
  );
};

export default Search