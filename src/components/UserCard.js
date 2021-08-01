import React from "react";

const UserCard = ({ user }) => {
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </>
  );
};

export default UserCard;
UserCard.defaultProps = {
  name: "larry",
  email: "larry@gmail.com",
};
