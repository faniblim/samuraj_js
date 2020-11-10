import React from "react";
import {
  addFriendCreator,
  updateNewFriendCreator,
} from "../../redux/sidebar-reducer";
import StoreContext from "../../StoreContext";
import Sidebar from "./Sidebar";

const SidebarContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
      (store) => {
        let state = store.getState().sidebar;

        let onSendFriendClick = () => {
          store.dispatch(addFriendCreator());
        };

        let onNewFriendChange = (friend) => {
          store.dispatch(updateNewFriendCreator(friend));
        };
        return (
          <Sidebar
            updateNewFriend={onNewFriendChange}
            sendFriend={onSendFriendClick}
            sidebar={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default SidebarContainer;
