import React, { useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../common/util'; // TODO: util 폴더로 옮기기
import { GET_LOG_IN_REQUEST } from '../reducers/account';

const Home = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { user_info, log_in_error_message } = useSelector(
    (state) => state.account
  );

  const dispatch = useDispatch();

  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: GET_LOG_IN_REQUEST,
        data: {
          email: id,
          password: password,
        },
      });
    },
    [id, password]
  );

  useEffect(() => {
    if (user_info) {
      alert('로그인했으니 메인페이지로 이동합니다.');
    }
  }, [user_info]);

  useEffect(() => {
    if (log_in_error_message) {
      alert(log_in_error_message);
    }
  }, [log_in_error_message]);

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input
          placeholder="아이디"
          value={id}
          onChange={onChangeId}
          name="name"
        />

        {/* <input type='text' value
        <Input name="user-id" value={id} onChange={onChangeId} required /> */}
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <input
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
          name="name"
          type="password"
        />
      </div>
      <div>
        <input type="submit" value="로그인" />
      </div>
    </form>
  );
};

Home.getInitialProps = async (context) => {
  //console.log('context: ', context);
  // console.log(Object.keys(context));
  console.log('이거 실행 되닝?');
  // context.store.dispatch({
  //   type: GET_LOG_IN_REQUEST,
  //   data: {
  //     email: 'sdy016@naver.com',
  //     password: '2rhkdtjr',
  //   },
  // });
};

export default Home;
