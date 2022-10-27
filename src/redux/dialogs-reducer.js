const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initState = {
  dialogsData: [
    { id: 1, name: "Артём" },
    { id: 2, name: "Данил" },
    { id: 3, name: "Андрей" },
    { id: 4, name: "Влад" },
    { id: 5, name: "Сергей" },
    { id: 6, name: "Богдан" },
  ],

  messagesData: [
    { id: 1, text: "Привет!" },
    { id: 2, text: "Как дела?" },
    { id: 3, text: "Классная погода сегодня!" },
    { id: 4, text: "Точно" },
    { id: 5, text: "Почему вчера не было тебя?" },
    { id: 6, text: "Заболел" },
    { id: 7, text: "Что делаешь?" },
    {
      id: 8,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste iusto magni sed unde? Beatae ea earum, eligendi eum exercitationem inventore maiores quas reprehenderit. Assumenda atque consectetur consequuntur debitis deleniti dignissimos dolor dolorem ducimus eaque eveniet ex incidunt iure laboriosam magni, minus neque, nulla qui quisquam quos repellat rerum, sint tenetur.",
    },
    { id: 9, text: "Чего?.." },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initState, action) => {
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
