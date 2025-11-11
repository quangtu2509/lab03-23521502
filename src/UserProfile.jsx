// src/UserProfile.jsx

import PropTypes from "prop-types";

function UserProfile({ userData, theme = "light" }) {
  const wrapperClassName = `profile-card theme-${theme}`;

  return (
    <div className={wrapperClassName}>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <img
        className="profile-avatar"
        src={userData.avatarUrl}
        alt={userData.name}
        width={userData.imageSize}
        height={userData.imageSize}
      />
    </div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    imageSize: PropTypes.number,
  }).isRequired,
  theme: PropTypes.oneOf(["light", "dark"]),
};

export default UserProfile;
