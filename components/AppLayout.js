import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Footer from './layout/footer';
// import UserProfile from '../containers/UserProfile';

const AppLayout = ({ children }) => {
  // const { me } = useSelector(state => state.user);

  // const onSearch = (value) => {
  //   Router.push({ pathname: '/hashtag', query: { tag: value } }, `/hashtag/${value}`);
  // };

  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
