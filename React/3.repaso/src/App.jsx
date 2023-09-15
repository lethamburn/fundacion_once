import "./App.css";

const App = () => {
  const date = new Date();
  const hour = date.getHours()
  console.log(hour)

  return (
    <>
      <h2>
        {hour >= 6 && hour <= 12
          ? "Buenos dias"
          : hour > 12 && hour <= 19
          ? "Buenas tardes"
          : "Buenas noches"}
      </h2>
    </>
  );
};

export default App;
