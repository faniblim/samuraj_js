let store = { 
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "11" },
        { id: 2, message: "It/'s my first post", likesCount: "20" },
        { id: 3, message: "(^*.*^)", likesCount: "35" },
        { id: 4, message: "Yo", likesCount: "2" },
      ],
      newPostText: 'it-kamasutra.com'
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
      newMessageText: '((^-.-^))'
    },
    sidebar: { 
      friends: [
          {id: 1, name: "Natasha", friendCount: "72"},
          {id: 2, name: "Andrey", friendCount: "56"},
          {id: 3, name: "Alla", friendCount: "84"}
      ]  
    }
  },

  getState() { 
    return  this._state;
  },

  _callSubscriber() {
    console.log('State changed');
  }, 

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  }, 

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  }, 
  
  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessageText = ''; 
    this._callSubscriber(this._state);
  },
  
  updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },

subscribe(observer) {
  this._callSubscriber = observer;
}
}

export default store;

window.store=store;
