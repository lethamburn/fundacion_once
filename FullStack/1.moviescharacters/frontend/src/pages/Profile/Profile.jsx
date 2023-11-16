import "./Profile.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <main>
      <img src={user.avatar} alt={user.username} />
      <h2>{user.username}</h2>
      <p>{user.id}</p>
    </main>
  );
};

export default Profile;
