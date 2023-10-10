import { MyContext } from "../context/context";
import { useContext } from "react";

const Article = () => {
  const { setName } = useContext(MyContext);

  return (
    <article>
      <h4>Article</h4>
      <input type="text" onInput={(ev) => setName(ev.target.value)} />
    </article>
  );
};

export default Article;
