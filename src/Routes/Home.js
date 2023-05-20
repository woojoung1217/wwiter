/*eslint-disable */

import React, { useState } from "react";
import Navigation from "../Components/Navigation";
import { dbService } from "../fbase";
import { addDoc, collection } from "firebase/firestore";
const Home = ({ isLoggedin }) => {
  const [nweet, setNweet] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(dbService, "nweets"), {
        nweet,
        createdAt: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setNweet("");
  };
  const onChange = ({ target: { value } }) => {
    setNweet(value);
  };

  return (
    <>
      <p> home </p>
      <div>{!isLoggedin ? <Navigation /> : null}</div>

      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="무슨 생각을 하고 계신가요?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
    </>
  );
};

export default Home;
