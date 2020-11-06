let ADD_POST = "ADD-POST";
let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let ADD_MESSAGE = "ADD-MESSAGE";
let UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
      newMessageText: "((^-.-^))",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Natasha", friendCount: "72" },
        { id: 2, name: "Andrey", friendCount: "56" },
        { id: 3, name: "Alla", friendCount: "84" },
      ],
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
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text,});
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (textMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,  newMessage: textMessage,});

export default store;

window.store = store;
