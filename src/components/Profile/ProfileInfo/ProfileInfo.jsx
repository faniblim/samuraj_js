import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }

  return (
    <div>
      <div>
        {/* <img src="https://sun9-49.userapi.com/AfX6GrEzWjvLGKhcksDq9ktmbQ6L2Z2JGiEOZw/tTy-mw5GOYs.jpg" /> */}
        <img src={props.profile.photo.large} />
      </div>
      <div className={s.descriptionblock}>ava+description</div>
    </div>
  );
};

export default ProfileInfo;
