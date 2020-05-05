import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './AdminActions';
import * as api from '../../../Api/AdminPageApi';
import * as actionTypes from './AdminActionTypes';

function* fetchAllUsers() {
  const users = yield call(api.fetchAllUsers);
  yield put(actions.getAllUsersSuccess(users));
}

function* fetchSingleUser(action) {
  const user = yield call(api.fetchUser, action.payload);
  yield put(actions.getUserSuccess(user));
}

 export function* AdminEffects() {
   yield takeEvery(actionTypes.GET_ALL_USERS, fetchAllUsers);
   yield takeEvery(actionTypes.GET_USER, fetchSingleUser);
 }
 
  