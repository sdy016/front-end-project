import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_PRODUCT_BEST_REQUEST,
  GET_PRODUCT_BEST_SUCCESS,
  GET_PRODUCT_BEST_FAILURE,
} from '../reducers/product';

function GET_product_best_API(userId, offset = 0, limit = 3) {
  // 서버에 요청을 보내는 부분
  return axios.post(
    `/user/${userId || 0}/followers?offset=${offset}&limit=${limit}`,
    { withCredentials: true }
  );
}

function* GET_product_best(action) {
  try {
    // yield call(loadFollowersAPI);
    const result = yield call(GET_product_best_API, action.data);
    yield put({
      type: GET_PRODUCT_BEST_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    // loginAPI 실패
    console.error(e);
    yield put({
      type: LOAD_FOLLOWERS_FAILURE,
      error: e,
    });
  }
}

function* GET_product_best_WATCH() {
  yield takeEvery(GET_PRODUCT_BEST_REQUEST, GET_product_best);
}

export default function* userSaga() {
  yield all([fork(GET_product_best_WATCH)]);
}
