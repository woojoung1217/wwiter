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

  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///+xsbH8/PwAAADMzMzd3d2ysrLw8PD6+vr19fXR0dHJycmqqqrp6ent7e339/e7u7t6enrc3NzW1taDg4O4uLgNDQ3j4+OWlpaNjY0yMjJxcXEsLCxBQUEWFhZNTU2kpKRWVlYbGxteXl4lJSXJ0iVPAAACEklEQVR4nO3ZW5ebIBSGYSEIAp5Gk5jzZDrz/39jUdN2kt6my2av97lxhSu+tZUNJMsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4L+gndNLz+HfCuezGZ9aXk7t/fhQq1U5/uqCX3hCTzesd2OmW8LeltXSM3oy3a4ue/0rYdWqTb30lJ6tv2zf4y2hDlaFZukZPVu93m7Xfk44tKp1S0/o+brz9lDOCY2yXZFlTV3LWG70YPr00fnrZXWszPEYvbHRp84YbBmKpWf3DH6/Ouw7l+UfP479NNKkxL5rVSqliLZYlF+n08c1d+1u+D3oolW27UUETCXbfR5Op8/4fay3qg2CWqLZvX+dr99HnDGDkALOis3b+r7Fy9uAV/3jQD4aBPRFPYQ4yh/GY6lG8fX7RbNbv43Kh/GopCec39JcxltqRo9vqbylRt9XS1y7SJtTcxdRWsuvQqvsXb+QtW3TfWvTqvmnhq53orbeukv52s5ndT8f7N10fCpc2JRBRMIilDakpdNHa1wVY6XNXLymrmQcgTNf16l4RSql0bkqc6nXGC7FGrJcqVzoVVQTlE1f3ZRwvE604q4T641qU/+bE45XwuISVuXUEG8JJV7r+zD1vpRwuq3Rr3+m+Mv8d5OLUeAqeqcQWDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL+onoV0TiIQEvU4AAAAASUVORK5CYII="></img>
      )}
      {/* <footer>&copy; {new Date().getFullYear()}Wwitter</footer> */}
    </>
  );
}

export default App;
