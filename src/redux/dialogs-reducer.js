const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

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
    ],
    newMessageBody: "((^-.-^))",
}

const dialogsReducer = (state = initialState , action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 5, message: body });
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
