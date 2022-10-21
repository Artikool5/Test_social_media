import React from "react";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "../dev";
import App from "../App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderEntireTree = (state, addPost) => {
  root.render(
    <React.StrictMode>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <App state={state} addPost={addPost} />
      </DevSupport>
    </React.StrictMode>
  );
};

export default renderEntireTree;
