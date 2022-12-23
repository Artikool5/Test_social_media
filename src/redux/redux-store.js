import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
  },
});

export default store;
