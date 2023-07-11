const getCharacters = async () => {
  //Con await le decimos que hasta que no termine el fetch no siga con el siguiente paso
  const data = await fetch("https://rickandmortyapi.com/api/character");
  //Con await le decimos que hasta que no termine de convertir los datos no siga con el siguiente paso
  const dataJSON = await data.json();
  console.log(dataJSON);
};

getCharacters();
