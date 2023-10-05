import "./Container.css";
import { useRef } from "react";

const Container = () => {
  const containerRef = useRef(null);

  const changeTheme = () => {
    containerRef.current.classList.toggle("dark");
  };

  return (
    <div className="container" ref={containerRef}>
      <p>
        Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem
        impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum
        Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem impsum Lorem
        impsum Lorem impsum Lorem impsum
      </p>
      <button onClick={changeTheme}>Change</button>
    </div>
  );
};

export default Container;
