import React from "react";
import { connect } from "react-redux";
import {
  followSuccess,
  follow,
  unfollow,
  setCarrentPage,
  unfollowSuccess,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        {this.props.users && (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPagechanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

// let withRedirect = withAuthRedirect(UsersContainer);

// export default connect(
//   mapStateToProps,
//   { follow, unfollow, setCarrentPage, toggleFollowingProgress, getUsers }
// )(withRedirect);

export default withAuthRedirect(connect(
  mapStateToProps,
  { follow, unfollow, setCarrentPage, toggleFollowingProgress, getUsers }
)(UsersContainer));