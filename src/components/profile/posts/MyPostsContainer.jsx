import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onButtonClick = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onNewPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      onButtonClick={onButtonClick}
      onNewPostChange={onNewPostChange}
      posts={state.profilePage.postsData}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
