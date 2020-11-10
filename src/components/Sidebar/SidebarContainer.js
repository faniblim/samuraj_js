import React from "react";
import {
  addFriendCreator,
  updateNewFriendCreator,
} from "../../redux/sidebar-reducer";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";


// const SidebarContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {
//       (store) => {
//         let state = store.getState().sidebar;

//         let onSendFriendClick = () => {
//           store.dispatch(addFriendCreator());
//         };

//         let onNewFriendChange = (friend) => {
//           store.dispatch(updateNewFriendCreator(friend));
//         };
//         return (
//           <Sidebar
//             updateNewFriend={onNewFriendChange}
//             sendFriend={onSendFriendClick}
//             sidebar={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    newPostText: state.sidebar.newFriend
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewFriend: (friend) => {dispatch(updateNewFriendCreator(friend));},
    sendFriend: () => {dispatch(addFriendCreator());
    }
  }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
