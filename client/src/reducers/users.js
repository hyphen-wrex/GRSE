import { types } from 'Actions';

const users = (state = [], action) => {
  switch (action.type) {
    case types.GET_ALL_USERS_SUCCESS:
    case types.UPDATE_USER_SUCCESS:
      return [...action.users];
    default:
      return state;
  }
};

export default users;
