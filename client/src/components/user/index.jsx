import React from 'react';

export default ({ user }) => {
  const { id, username, fullName } = user;
  return <li key={id}>{username}: {fullName}</li>;
};
