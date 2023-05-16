/* eslint-disable */

import React, { useState } from "react";
import Home from "../Routes/Home";
import { Routes, Route, Link, Router } from "react-router-dom";
import Auth from "../Routes/Auth";
import { Navigation } from "./Navigation";
import Profile from "../Routes/Profile";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Home isLoggedIn={isLoggedIn} /> : <Auth />}
        ></Route>
        <Route
          path="/profile"
          element={isLoggedIn == true ? <Profile></Profile> : null}
        />
      </Routes>
    </>
  );
};

export default AppRouter;
