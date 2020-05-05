import { combineReducers } from 'redux';

import adminReducer from '../Pages/AdminPage/State/AdminReducer';

const rootReducer = combineReducers({
  adminPage: adminReducer,
});

export default rootReducer;
