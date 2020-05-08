import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_LOG_IN_REQUEST,
  GET_LOG_IN_SUCCESS,
  GET_LOG_IN_FAILURE,
} from '../reducers/account';
import { sagaHandler } from '../common/sagaHandler';

function GET_login_in_API(data) {
  // 서버에 요청을 보내는 부분
  return axios.post('/account/login', data, { withCredentials: true });
}

function* GET_login_in(action) {
  try {
    // yield call(loadFollowersAPI);
    const response = yield call(GET_login_in_API, action.data);
    yield put(sagaHandler(GET_LOG_IN_SUCCESS, GET_LOG_IN_FAILURE, response));
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({ type: GET_LOG_IN_FAILURE, error: e });
  }
}

function* GET_login_in_WATCH() {
  yield takeEvery(GET_LOG_IN_REQUEST, GET_login_in);
}

export default function* userSaga() {
  yield all([fork(GET_login_in_WATCH)]);
}
