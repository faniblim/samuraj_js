import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div>
      My posts
      <div>
          <textarea></textarea>
          <button>Add post</button>
      </div>
     <Post message="Hi, how are you?" likesCount='11'/>
     <Post message="It's my first post" likesCount='20'/>
    </div>
  );
};

export default MyPosts;
