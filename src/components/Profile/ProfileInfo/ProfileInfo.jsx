import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  // if(!props.profile){
  //   return <Preloader />
  // }

  return (
    <div>
       <div>
        <img src="https://sun9-49.userapi.com/AfX6GrEzWjvLGKhcksDq9ktmbQ6L2Z2JGiEOZw/tTy-mw5GOYs.jpg" />
        </div>
        <div className={s.descriptionblock}>
        {/* <img src={props.profile.photo.large} /> */}
        <ProfileStatus status={"Hello my friends"} />
      </div>
    </div>
  );
};

export default ProfileInfo;
