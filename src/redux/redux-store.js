import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = configureStore({
  reducer: { profilePage: profileReducer, messagesPage: dialogsReducer },
});

export default store;
