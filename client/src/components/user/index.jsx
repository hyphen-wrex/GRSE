import React, { Component } from 'react';
import autobind from 'react-autobind';
import './styles';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      fullName: this.props.user.fullName,
    };
    autobind(this);
  }
  onClick() {
    this.setState({ editing: true });
  }
  onChange(e) {
    this.setState({ fullName: e.target.value });
  }
  onKeyDown(e) {
    if (e.which === 13) {
      this.props.update(e.target.value);
      this.setState({ editing: false });
    }
  }
  render() {
    const { editing, fullName } = this.state;
    const { user } = this.props;
    const { id, username } = user;
    return <li key={id}>
      <span>Username: {username}</span>
      {
        editing
          ? <span>
            Fullname:
            <input
              autoFocus
              value={fullName}
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
            />
          </span>
          : <span onClick={this.onClick}>Fullname: {fullName}</span>
      }
    </li>;
  }
}

export default User;
