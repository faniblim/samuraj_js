let rerenderEntiereTree = () => {
  console.log('State changed');
}

let state = {
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
}
window.state=state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntiereTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntiereTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  }
  state.dialogsPage.messages.push(newMessage)
  state.dialogsPage.newMessageText = ''; 
  rerenderEntiereTree(state);
}

export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  rerenderEntiereTree(state);
}

export const subscribe = (observer) => {
  rerenderEntiereTree = observer;
}

export default state;
