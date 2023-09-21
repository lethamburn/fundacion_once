import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import More from "./components/More/More";
//Hay que importar CV antes de destructurarlo
import { CV } from "./CV/cv";
const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);

  return (
    <div className="App">
      <Hero hero={hero} />
      <About hero={hero} />
      <button onClick={() => setShowEducation(true)}>Education</button>
      <button onClick={() => setShowEducation(false)}>Experience</button>
      {showEducation ? (
        <Education education={education} />
      ) : (
        <Experience experience={experience} />
      )}

      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
      />
    </div>
  );
};

export default App;
