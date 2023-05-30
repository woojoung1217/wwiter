/* eslint-disable */

import { getAuth, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dbService } from "../fbase";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { updateProfile } from "@firebase/auth";
import { Link } from "react-router-dom";
const Profile = ({ isLoggedIn, userObj }) => {
  const [newDisplayName, setNewDisPlayName] = useState(userObj.displayName);
  const navigate = useNavigate();
  const auth = getAuth();
  const onLogOutClick = () => {
    signOut(auth);
    navigate("/", { replace: true });
  };

  const getMyNweets = async () => {
    const q = query(
      collection(dbService, "nweets"),
      where("creatorId", "==", userObj.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  useEffect(() => {
    getMyNweets();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(userObj, { displayName: newDisplayName });
    }
    setNewDisPlayName();
  };
  const onChange = (e) => {
    setNewDisPlayName(e.target.value);
  };

  return (
    <>
      <p>{userObj.displayName} 님의 프로필😃</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Display Name"
          onChange={onChange}
          value={newDisplayName}
        ></input>
        <input type="submit" value="update Profile"></input>
      </form>

      <button onClick={onLogOutClick}>로그아웃</button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        돌아가기
      </button>
    </>
  );
};

export default Profile;
