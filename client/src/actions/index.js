import { fetchUsers, updateDbEntry } from 'Lib/remote';

export const types = {
  GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
  GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',
  GET_ALL_USERS_FAILURE: 'GET_ALL_USERS_FAILURE',
  UPDATE_USER_REQUEST: 'UPDATE_USER_REQUEST',
  UPDATE_USER_SUCCESS: 'UPDATE_USER_SUCCESS',
  UPDATE_USER_FAILURE: 'UPDATE_USER_FAILURE',
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

export function updateUser(user) {
  return async (dispatch) => {
    dispatch({ type: types.UPDATE_USER_REQUEST, user });
    try {
      const users = await updateDbEntry(user);
      dispatch({ type: types.UPDATE_USER_SUCCESS, users });
    } catch (error) {
      dispatch({ type: types.UPDATE_USER_FAILURE, error });
    }
  };
}

