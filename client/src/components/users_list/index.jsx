import React from 'react';

import User from 'Components/user';

export default (props) => {
  const users = props.users.map(user => <User key={user.id} user={user} />);
  return <ul>{users}</ul>;
};
