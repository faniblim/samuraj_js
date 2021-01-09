const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 5, message: body }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
export default dialogsReducer;
