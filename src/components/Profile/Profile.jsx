import React from "react";
import MyPostsContainer from "./MYPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo Profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
