import { fetchUsers } from 'Lib/remote';

export const types = {
  GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
  GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',
  GET_ALL_USERS_FAILURE: 'GET_ALL_USERS_FAILURE',
};

export function getUsers() {
  return async (dispatch) => {
    dispatch({ type: types.GET_ALL_USERS_REQUEST });
    try {
      const users = await fetchUsers();
      dispatch({ type: types.GET_ALL_USERS_SUCCESS, users });
    } catch (error) {
      dispatch({ type: types.GET_ALL_USERS_FAILURE, error });
    }
  };
}

