import produce from 'immer';
import { DEFAULT, SUCCESS, DB_ERROR } from '../common/constants';
//import cookie from 'react-cookies';
//import { serialize } from 'cookie';
export const initialState = {
  is_logging_out: false, // 로그아웃 시도중
  is_logging_in: false, // 로그인 시도중
  log_in_error_message: '', // 로그인 실패 사유
  is_login_result: DEFAULT, //로그인 결과
  user_info: null, //사용자 정보
};

export const GET_LOG_IN_REQUEST = 'GET_LOG_IN_REQUEST';
export const GET_LOG_IN_SUCCESS = 'GET_LOG_IN_SUCCESS';
export const GET_LOG_IN_FAILURE = 'GET_LOG_IN_FAILURE';

// export const GET_PRODUCT_NEW_REQUEST = 'GET_PRODUCT_NEW_REQUEST';
// export const GET_PRODUCT_NEW_SUCCESS = 'GET_PRODUCT_NEW_SUCCESS';
// export const GET_PRODUCT_NEW_FAILURE = 'GET_PRODUCT_NEW_FAILURE';

// export const GET_FOOD_MAKER_REQUEST = 'GET_FOOD_MAKER_REQUEST';
// export const GET_FOOD_MAKER_SUCCESS = 'GET_FOOD_MAKER_SUCCESS';
// export const GET_FOOD_MAKER_FAILURE = 'GET_FOOD_MAKER_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_LOG_IN_REQUEST: {
        draft.is_logging_in = true;
        draft.user_info = null;
        draft.log_in_error_message = '';
        break;
      }
      case GET_LOG_IN_SUCCESS: {
        draft.is_logging_in = false;
        draft.user_info = action.data;
        break;
      }
      case GET_LOG_IN_FAILURE: {
        draft.is_logging_in = false;
        draft.product_best = [];
        draft.log_in_error_message = action.data;
        break;
      }
    }
  });
};
