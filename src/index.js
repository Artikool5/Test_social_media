import "./index.css";
import store from "./redux/store";
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
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </DevSupport>
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
