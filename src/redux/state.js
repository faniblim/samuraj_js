let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let SEND_MESSAGE = "SEND-MESSAGE";
let UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let ADD_FRIEND = "ADD-FRIEND";
let UPDATE_NEW_FRIEND_NAME = "UPDATE-NEW-FRIEND-NAME";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "11" },
        { id: 2, message: "It/'s my first post", likesCount: "20" },
        { id: 3, message: "(^*.*^)", likesCount: "35" },
        { id: 4, message: "Yo", likesCount: "2" },
      ],
      newPostText: "it-kamasutra.com",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Tana" },
        { id: 2, name: "Semion" },
        { id: 3, name: "Anastasja" },
        { id: 4, name: "Nik" },
      ],
      messages: [
        { id: 1, message: "How are you?" },
        { id: 2, message: "Hi" },
        { id: 3, message: "(^*.*^)" },
        { id: 4, message: "Yo" },
      ],
      // newMessageText: "((^-.-^))",
      newMessageBody: "((^-.-^))",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Natasha", friendCount: "72" },
        { id: 2, name: "Andrey", friendCount: "56" },
        { id: 3, name: "Alla", friendCount: "84" },
      ],
      newFriend: "Jay",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);      
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === SEND_MESSAGE) {    
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({id: 5, message: body});      
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);

    } else if (action.type === ADD_FRIEND) {
      let friend =this._state.sidebar.newFriend;
      this._state.sidebar.newFriend = "";
      this._state.sidebar.friends.push({ id: 4, name: friend, friendCount: "89" });      
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_FRIEND_NAME) {
      this._state.sidebar.newFriend = action.friend;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text,});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body});

  export const addFriendCreator = () => ({ type: ADD_FRIEND });
export const updateNewFriendCreator = (friend) => ({
  type: UPDATE_NEW_FRIEND_NAME,  friend: friend,});

export default store;
window.store = store;
