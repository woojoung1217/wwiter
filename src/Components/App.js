/* eslint-disable */
import React, { useEffect } from "react";
import { useState } from "react";
import AppRouter from "./Router";
import { useNavigate } from "react-router-dom";
import { authService } from "../fbase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        const uid = user.uid;
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    setUserObj({
      displayName: userObj.displayName,
      uid: userObj.uid,
      updateProfile: (args) =>
        updateProfile(userObj, { displayName: userObj.displayName }),
    });
  };

  return (
    <>
      {init ? (
        <AppRouter
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          refreshUser={refreshUser}
        />
      ) : (
        "loading"
      )}
      {/* <footer>&copy; {new Date().getFullYear()}Wwitter</footer> */}
    </>
  );
}

export default App;
