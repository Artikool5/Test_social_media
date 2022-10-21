import "./index.css";
import state, { addPost, subscribe, updateNewPostText } from "./redux/state";
import React from "react";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </DevSupport>
    </React.StrictMode>
  );
};

renderEntireTree(state, addPost);
subscribe(renderEntireTree);
