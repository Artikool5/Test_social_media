import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import Messages from "../components/dialogs/Messages";
import App from "../App.jsx";
import MyPosts from "../components/profile/posts/myPosts";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/App">
        <App />
      </ComponentPreview>
      <ComponentPreview path="/Messages">
        <Messages />
      </ComponentPreview>
      <ComponentPreview path="/MyPosts">
        <MyPosts />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
