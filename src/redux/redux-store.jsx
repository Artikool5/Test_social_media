import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer.jsx";
import dialogsReducer from "./dialogs-reducer.jsx";
import usersReducer from "./users-reducer.jsx";

const store = configureStore({
  reducer: {
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    usersPage: usersReducer,
  },
});

export default store;
