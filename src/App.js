import { useState } from "react";
import "./styles.scss";
import Post from "./components/Post";
import { Users } from "./data";

function App() {
  return (
    <>
      {Users.map((e) => (
        <Post
          index={e.id}
          img={e.profilePicture}
          name={e.username}
          potstime={e.lastseen}
          postcontent={e.post}
          increament={e.increament}
          decreamnent={e.decreamnent}
        />
      ))}
    </>
  );
}

export default App;
