/* eslint-disable */

import React, { useState } from "react";
import Home from "../Routes/Home";
import { Routes, Route, Link, Router } from "react-router-dom";
import Auth from "../Routes/Auth";
import Navigation from "./Navigation";
import Profile from "../Routes/Profile";

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
  return (
    <div
      style={{
        maxWidth: 890,
        width: "100%",
        margin: "0 auto",
        marginTop: 80,
        display: "flex",
        justifyContent: "center",
      }}
    >
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
            isLoggedIn == true ? (
              <Profile userObj={userObj} refreshUser={refreshUser}></Profile>
            ) : null
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
