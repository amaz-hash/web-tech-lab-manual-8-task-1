import React from "react";

function ProfileCard(props) {
  const { name, age, occupation, location } = props;

  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default ProfileCard;
