import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [nuevoAlumno, setNuevoAlumno] = useState("");

  const getAlumnos = async () => {
    const data = await fetch(
      "https://65117229829fa0248e4012cc.mockapi.io/alumnos"
    );
    const dataJSON = await data.json();
    setAlumnos(dataJSON);
  };

  const postAlumno = async () => {
    await fetch("https://65117229829fa0248e4012cc.mockapi.io/alumnos", {
      method: "POST",
      body: JSON.stringify({
        name: nuevoAlumno,
      }),
    });
  };

  useEffect(() => {
    getAlumnos();
  }, [nuevoAlumno]);

  return (
    <>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.id}>{alumno.name}</li>
        ))}
      </ul>
      <input type="text" onInput={(ev) => setNuevoAlumno(ev.target.value)} />
      <button onClick={postAlumno}>Post</button>
    </>
  );
};

export default App;
