import { combineReducers } from 'redux';
import product from './product';
import account from './account';

const rootReducer = combineReducers({
  product,
  account,
});

export default rootReducer;
