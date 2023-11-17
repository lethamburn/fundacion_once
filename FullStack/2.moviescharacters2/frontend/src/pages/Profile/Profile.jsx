import './Profile.css';

import { useContext } from 'react';

import { UserContext } from '../../context/userContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <main className="profile">
      <h2>{user.username}</h2>
      <img src={user.avatar} alt={user.username} />
    </main>
  );
};

export default Profile;
