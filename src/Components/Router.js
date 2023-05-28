/* eslint-disable */

import React, { useState } from "react";
import Home from "../Routes/Home";
import { Routes, Route, Link, Router } from "react-router-dom";
import Auth from "../Routes/Auth";
import { Navigation } from "./Navigation";
import Profile from "../Routes/Profile";

const AppRouter = ({ isLoggedIn, userObj }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home isLoggedIn={isLoggedIn} userObj={userObj} />
            ) : (
              <Auth />
            )
          }
        ></Route>
        <Route
          path="/profile"
          element={
            isLoggedIn == true ? <Profile userObj={userObj}></Profile> : null
          }
        ></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
