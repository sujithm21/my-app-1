import React from 'react';

const UserProfile = ({ user }) => {
  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Mobile No:</strong> {user.mobile}</p>
    </div>
  );
};

export default UserProfile;
