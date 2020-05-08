import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import product from './product';
import account from './account';

axios.defaults.baseURL = 'http://localhost:8002/';

export default function* rootSaga() {
  yield all([fork(product), fork(account)]);
}
