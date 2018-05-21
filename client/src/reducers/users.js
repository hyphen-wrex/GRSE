import { types } from 'Actions';

const users = (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_USERS_SUCCESS:
      return [...action.users];
    default:
      return state;
  }
};

export default users;
