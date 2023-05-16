/*eslint-disable */

import React from "react";
import Navigation from "../Components/Navigation";
const Home = ({ isLoggedin }) => {
  return (
    <>
      <p> home </p>
      <div>{!isLoggedin ? <Navigation /> : null}</div>
    </>
  );
};

export default Home;
