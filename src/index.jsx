import "./index.css";
import store from "./redux/redux-store.jsx";
import React from "react";
import { DevSupport } from "@react-buddy/ide-toolbox";
import { ComponentPreviews, useInitial } from "./dev";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DevSupport
      ComponentPreviews={ComponentPreviews}
      useInitialHook={useInitial}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </DevSupport>
  </React.StrictMode>
);
