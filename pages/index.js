import React, { useEffect, useCallback, useRef } from "react";

const Home = () => {
  return <div>하이루 방가르.</div>;
};

Home.getInitialProps = async (context) => {
  // console.log(Object.keys(context));
  // context.store.dispatch({
  //   type: LOAD_MAIN_POSTS_REQUEST,
  // });
};

export default Home;
