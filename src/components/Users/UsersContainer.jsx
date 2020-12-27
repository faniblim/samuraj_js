import React from "react";
import { connect } from "react-redux";
import {follow, setCarrentPage, setUsers, unfollow, setUsersTotalCount, setToggleIsFetching} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setToggleIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
        this.props.setToggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setUsersTotalCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCarrentPage(pageNumber);
    this.props.setToggleIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.setToggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <>
      {this.props.isFetching ? <Preloader /> : null }
       {/* <div>Users</div> */}
      {/* <Users {...this.props} /> */}
        {this.props.users && <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPagechanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />}
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
  };
};

export default connect(mapStateToProps, 
  {
    follow, unfollow, setUsers,
    setCarrentPage, setUsersTotalCount, setToggleIsFetching,
  } ) (UsersContainer);
