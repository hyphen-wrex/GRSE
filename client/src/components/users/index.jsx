import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from 'Actions/';

import UsersList from 'Components/users_list';

class Users extends Component {
  componentWillMount() {
    this.props.getUsers();
  }
  render() {
    const { users, loading } = this.props;
    if (loading) {
      return <div>...</div>;
    }
    return <UsersList users={users} />;
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
