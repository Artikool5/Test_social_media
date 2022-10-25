import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    messagesPage: {
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
    },

    profilePage: {
      postsData: [
        { id: 1, text: "Good morning everyone!", likes: "5" },
        { id: 2, text: "What a great day it is.", likes: "5" },
        { id: 3, text: "React is cool", likes: "27" },
        {
          id: 4,
          text: "But HTML is still better programming language than JavaScript",
          likes: "63",
        },
        { id: 5, text: "JavaScript's wierd sometimes", likes: "31" },
        { id: 6, text: "I'm gonna scream", likes: "1" },
      ],
      newPostText: "Nice post",
    },
  },

  _callSubscriber() {
    return "";
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.messagesPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;
