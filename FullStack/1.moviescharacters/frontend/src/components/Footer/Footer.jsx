import "./Footer.css";
import { UserContext } from "../../context/userContext";
import { useContext } from "react";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <footer>
      {user !== null ? user.username : "Please, log in"}
      <p>2023 - FullStack</p>
    </footer>
  );
};

export default Footer;
