import React from "react";
import Friend from "./Friend/Friend";
import s from "./Friends.module.css";


const Friends = (props) => {

  let friendsElements = props.state.friends
  .map( f => <Friend id={f.id} name={f.name} friendCount={f.friendCount} /> );
 
  return (
    <div className={s.friends}>
       <h3>Friends</h3>
      <div className={s.friend}>
        {friendsElements}
      </div>
    </div>
  );
};

export default Friends;
