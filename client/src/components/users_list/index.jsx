import React from 'react';
import User from 'Components/user';

export default (props) => {
  const users = props.users.map(user =>
    <User
      key={user.id}
      user={user}
      update={(fullName) => {
        props.update(Object.assign({}, user, { fullName }));
      }}
    />);
  return <ul>{users}</ul>;
};
