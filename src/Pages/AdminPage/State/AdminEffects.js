import * as actions from './AdminActions';

  export function fetchAllUsers() {
    return async dispatch => {
      dispatch(actions.getAllUsers());

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
  
        dispatch(actions.getAllUsersSuccess(data));
    };
  }