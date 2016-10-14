/* eslint-disable no-unused-vars */
import { takeEvery, takeLatest } from 'redux-saga';
import { take, call, put, fork, select } from 'redux-saga/effects';

import * as API from '../utils/API.utils';
import {
  LOG_IN_REQUEST,
  logInSuccess,
  logInFailure,
} from '../actions';


function* authenticateUser({ authToken }) {
  try {
    const user = yield call(API.authenticateUser, { authToken });
    yield put(logInSuccess({ user }));
  } catch (error) {
    yield put(logInFailure({ error }));
  }
}


// ///////////////////
// WATCHERS /////////
// /////////////////
function* watchLogin() {
  yield* takeEvery(LOG_IN_REQUEST, authenticateUser);
}

export default function* () {
  yield [
    fork(watchLogin),
  ];
}
