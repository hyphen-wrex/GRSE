import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, updateUser } from 'Actions/';

import UsersList from 'Components/users_list';

class Users extends Component {
  componentWillMount() {
    this.props.getUsers();
  }
  render() {
    const { users, loading, update } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }
    return <UsersList users={users} update={update} />;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    loading: state.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  getUsers() { dispatch(getUsers()); },
  update(user) { dispatch(updateUser(user)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
