import "./index.css";
import store from "./redux/redux-store";
import React from "react";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderEntireTree = (state) => {
  debugger;
  root.render(
    <React.StrictMode>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </DevSupport>
    </React.StrictMode>
  );
};

// console.log(store);
renderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
});
