import "./index.css";
import renderEntireTree from "./redux/render";
import state, { addPost } from "./redux/state";

renderEntireTree(state, addPost);
