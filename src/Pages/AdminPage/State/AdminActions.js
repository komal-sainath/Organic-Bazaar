import * as actionTypes from './AdminActionTypes';


export const getAllUsers = () => ({ type: actionTypes.GET_ALL_USERS });

export const getAllUsersSuccess = users => ({
  type: actionTypes.GET_ALL_USERS_SUCCESS,
  payload: users,
});
