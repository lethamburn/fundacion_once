import "./Text.css";

const Text = (content, size = "medium") => {
  return `<p class=${size}>${content}</p>`;
};

export default Text;
