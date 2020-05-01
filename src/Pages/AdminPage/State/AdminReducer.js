import * as actionType from './AdminActionTypes';

export const initialState = {
  usersList: [],
};

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.GET_ALL_USERS:
      return { ...initialState, };
    case actionType.GET_ALL_USERS_SUCCESS:
      return { usersList: action.payload };
    default:
      return state;
  }
}
