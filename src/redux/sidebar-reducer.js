const ADD_FRIEND = "ADD-FRIEND";
const UPDATE_NEW_FRIEND_NAME = "UPDATE-NEW-FRIEND-NAME";

let initialState = {
    friends: [
      { id: 1, name: "Natasha", friendCount: "72" },
      { id: 2, name: "Andrey", friendCount: "56" },
      { id: 3, name: "Alla", friendCount: "84" },
    ],
    newFriend: "Jay",
}

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      let friend = state.newFriend;
      state.newFriend = "";
      state.friends.push({ id: 4, name: friend, friendCount: "89" });
      return state;
    case UPDATE_NEW_FRIEND_NAME:
      state.newFriend = action.friend;
      return state;
    default:
      return state;
  }
};

export const addFriendCreator = () => ({ type: ADD_FRIEND });
export const updateNewFriendCreator = (friend) => ({
  type: UPDATE_NEW_FRIEND_NAME,
  friend: friend,
});

export default sidebarReducer;
