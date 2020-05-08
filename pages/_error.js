// import React from 'react';
// import PropTypes from 'prop-types';

// const MyError = ({ statusCode }) => {
//   return (
//     <div>
//       <h1>{statusCode} 에러 발생</h1>
//     </div>
//   );
// };

// MyError.propTypes = {
//   statusCode: PropTypes.number,
// };

// MyError.defaultProps = {
//   statusCode: 400,
// };

// MyError.getInitialProps = async (context) => {
//   const statusCode = context.res
//     ? context.res.statusCode
//     : context.err
//     ? context.err.statusCode
//     : null;
//   return { statusCode };
// };

// export default MyError;

import Error from 'next/error';
import fetch from 'node-fetch';

export async function getServerSideProps() {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const errorCode = res.ok ? false : res.statusCode;
  const json = await res.json();

  return {
    props: { errorCode, stars: json.stargazers_count },
  };
}

export default function Page({ errorCode, stars }) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return <div>Next stars: {stars}</div>;
}
