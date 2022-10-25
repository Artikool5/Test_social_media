import "./App.css";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Profile from "./components/profile/profile";
import Messages from "./components/dialogs/Messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/store";

function App(props) {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <Menu />
        <div className="site-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  posts={props.state.profilePage.postsData}
                  newPostText={props.state.profilePage.newPostText}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/messages/*"
              element={
                <Messages
                  dialogs={props.state.messagesPage.dialogsData}
                  messages={props.state.messagesPage.messagesData}
                  dispatch={props.dispatch}
                  newMessageText={props.state.messagesPage.newMessageText}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
