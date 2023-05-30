/* eslint-disable */

import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Navigation = ({ userObj }) => {
  if (userObj.displayName === null) {
    const name = userObj.email.split("@")[0];
    userObj.displayName = name;
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">{userObj.displayName} 님의 프로필</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
