import ReviewScore from "./ReviewScore";
import ReviewTitle from "./ReviewTitle";

const Review = ({ title, score }) => {
  console.log("Renderizando Review...");
  return (
    <div>
      <ReviewTitle title={title} />
      <ReviewScore score={score} />
    </div>
  );
};
export default Review;
