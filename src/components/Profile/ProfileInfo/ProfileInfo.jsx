import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatus";

const ProfileInfo = ({profile,status, updateStatus}) => {
  if(!profile){
    return <Preloader />
  }

  return (
    <div>
       <div>
        <img src="https://sun9-49.userapi.com/AfX6GrEzWjvLGKhcksDq9ktmbQ6L2Z2JGiEOZw/tTy-mw5GOYs.jpg" />
        </div>
        <div className={s.descriptionblock}>
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
