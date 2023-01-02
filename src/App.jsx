import "./App.css";
import Header from "./components/header/header";
import Menu from "./components/menu/menu";
import Profile from "./components/profile/profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MessagesContainer from "./components/dialogs/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer.jsx";

function App(props) {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <Menu />
        <div className="site-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages/*" element={<MessagesContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
