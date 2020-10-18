let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: "11" },
      { id: 2, message: "It/'s my first post", likesCount: "20" },
      { id: 3, message: "Hi", likesCount: "35" },
      { id: 4, message: "Yo", likesCount: "2" },
    ]
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
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
    ]
  },
  sidebar: { 
    friends: [
        {id: 1, name: "Natasha", friendCount: "72"},
        {id: 2, name: "Andrey", friendCount: "56"},
        {id: 3, name: "Alla", friendCount: "84"}
    ]  
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  }
  state.profilePage.posts.push(newPost);

}

export default state;
