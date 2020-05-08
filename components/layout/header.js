import React, { useCallback } from 'react';
// import { Button, Form, Input } from 'antd';
// import Link from 'next/link';
// import { useDispatch, useSelector } from 'react-redux';
// import { useInput } from '../pages/signup'; // TODO: util 폴더로 옮기기
// import { LOG_IN_REQUEST } from '../reducers/user';

const Header = () => {
  return (
    <div class="footer">
      <hr />
      <div class="footerContent">
        <ul>
          <li>
            <a href="https://wecook.co.kr" target="_blank">
              위쿡마켓소개
            </a>
          </li>
          <li>공지사항</li>
          <li>이용약관</li>
          <li class="bold">개인정보처리방침</li>
          <li>
            <a
              href="https://forms.gle/XsEPf3wyhQrjxe3i7"
              target="_blank"
              class="bold">
              입점문의
            </a>
          </li>
        </ul>
        <div className="iconBox">
          <div class="face"></div>
          <div class="instar"></div>
          <img src="http://image.inicis.com/mkt/certmark/escrow/escrow_43x43_gray.png" />
        </div>
        <div>
          <p>
            대표 김기웅 <span>|</span>사업자등록번호 348 - 87 - 00219{' '}
            <span>|</span>통신판매업 신고번호 2019-서울종로-0839호{' '}
            <span>|</span>사업자명 (주)심플프로젝트컴퍼니
          </p>
          <p>
            (03028) 서울특별시 종로구 인왕산로 5(사직동) <span>|</span>
            전화 02 - 6953 - 2959 <span>|</span> <a>이메일 보내기</a>
          </p>
          <p class="gk">
            (주)심플프로젝트컴퍼니 사이트의 상품/판매자/쇼핑 정보, 콘텐츠, UI
            등에 대한 무단 복제, 전송, 배포, 스크래핑 등의 행위는 저작권법,
            콘텐츠산업 진흥법 등에 의하여 엄격히 금지됩니다.
          </p>
          <p class="bk">
            콘텐츠산업 진흥법에 따른 표시 위쿡마켓은 통신판매중개자이며
            통신판매의 당사자가 아닙니다. 따라서 위쿡마켓은 상품/거래정보 및
            거래에 대하여 책임을 지지 않습니다.
          </p>
          <p class="last">
            COPYRIGHT ⓒ 2018 (주)심플프로젝트컴퍼니.ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
