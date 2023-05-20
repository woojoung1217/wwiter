/* eslint-disable */

import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const auth = getAuth();
  const onLogOutClick = () => {
    signOut(auth);
    navigate("/", { replace: true });
  };
  return (
    <>
      <div>My profile</div>

      <button onClick={onLogOutClick}>로그아웃</button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        돌아가기
      </button>
    </>
  );
};

export default Profile;
