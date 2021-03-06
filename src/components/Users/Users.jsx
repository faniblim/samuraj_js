import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
  currentPage,
  totalUsersCount,
  pageSize,
  onPagechanged,
  users,
  followingInProgress,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPagechanged={onPagechanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
