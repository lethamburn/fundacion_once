import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/usercontext";

const AuthRoute = ({ children }) => {
  const { isAuth, user } = useContext(UserContext);

  if (user !== "Antonio") {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default AuthRoute;
