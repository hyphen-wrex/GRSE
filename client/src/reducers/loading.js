import { types } from 'Actions';

const loading = (state = false, action) => {
  switch (action.type) {
    case types.GET_ALL_USERS_REQUEST:
      return true;
    case types.GET_ALL_USERS_SUCCESS:
    case types.GET_ALL_USERS_FAILURE:
      return false;
    default:
      return state;
  }
};

export default loading;
