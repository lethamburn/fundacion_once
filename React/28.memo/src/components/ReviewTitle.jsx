import { memo } from "react";

const ReviewTitle = memo(({ title }) => {
  console.log("Renderizando ReviewTitle...");
  return <h2>{title}</h2>;
});

export default ReviewTitle;
