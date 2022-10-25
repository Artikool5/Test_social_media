const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 10,
        text: state.newMessageText,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newString;
      break;

    default:
      console.error(`Wrong dispatch type of ${action.type}`);
      break;
  }
  return state;
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newString: text,
});

export default dialogsReducer;
