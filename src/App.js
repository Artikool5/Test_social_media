import "./App.css";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Profile from "./components/profile/profile";
import Messages from "./components/dialogs/Messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { dialogsData, messagesData, postsData } from "./redux/state";

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
                  addPost={props.addPost}
                />
              }
            />
            <Route
              path="/messages/*"
              element={
                <Messages
                  dialogs={props.state.messagesPage.dialogsData}
                  messages={props.state.messagesPage.messagesData}
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
