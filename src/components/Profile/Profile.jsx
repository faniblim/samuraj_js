import React from "react";
import MyPosts from "./MYPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://sun9-49.userapi.com/AfX6GrEzWjvLGKhcksDq9ktmbQ6L2Z2JGiEOZw/tTy-mw5GOYs.jpg" />
      </div>
      <div>ava+description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
