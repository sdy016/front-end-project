import produce from 'immer';

export const initialState = {
  // isLoggingOut: false, // 로그아웃 시도중
  // isLoggingIn: false, // 로그인 시도중
  // logInErrorReason: '', // 로그인 실패 사유
  // isSignedUp: false, // 회원가입 성공
  // isSigningUp: false, // 회원가입 시도중
  // signUpErrorReason: '', // 회원가입 실패 사유
  // me: null, // 내 정보
  // followingList: [], // 팔로잉 리스트
  // followerList: [], // 팔로워 리스트
  // userInfo: null, // 남의 정보
  // isEditingNickname: false, // 이름 변경 중
  // editNicknameErrorReason: '', // 이름 변경 실패 사유
  // hasMoreFollower: false,
  // hasMoreFollowing: false,
  product_best: [], //베스트 상품
  product_new: [], //신규 상품
  food_maker: [], //푸드메이커
  is_product_best_pending: false, //베스트 상품 조회 시도중
  is_product_new_pending: false, //신규 상품 조회 시도중
  is_food_maker_pending: false, //푸드메이커 조회 시도중
};

export const GET_PRODUCT_BEST_REQUEST = 'GET_PRODUCT_BEST_REQUEST';
export const GET_PRODUCT_BEST_SUCCESS = 'GET_PRODUCT_BEST_SUCCESS';
export const GET_PRODUCT_BEST_FAILURE = 'GET_PRODUCT_BEST_FAILURE';

// export const GET_PRODUCT_NEW_REQUEST = 'GET_PRODUCT_NEW_REQUEST';
// export const GET_PRODUCT_NEW_SUCCESS = 'GET_PRODUCT_NEW_SUCCESS';
// export const GET_PRODUCT_NEW_FAILURE = 'GET_PRODUCT_NEW_FAILURE';

// export const GET_FOOD_MAKER_REQUEST = 'GET_FOOD_MAKER_REQUEST';
// export const GET_FOOD_MAKER_SUCCESS = 'GET_FOOD_MAKER_SUCCESS';
// export const GET_FOOD_MAKER_FAILURE = 'GET_FOOD_MAKER_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_PRODUCT_BEST_REQUEST: {
        draft.is_product_best_pending = true;
        draft.product_best = [];
        break;
      }
      case GET_PRODUCT_BEST_SUCCESS: {
        draft.is_product_best_pending = false;
        draft.product_best = action.data;
        break;
      }
      case GET_PRODUCT_BEST_FAILURE: {
        draft.is_product_best_pending = false;
        draft.product_best = [];
        break;
      }
    }
  });
};
