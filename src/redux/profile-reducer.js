const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 7,
        text: state.newPostText,
        likes: "0",
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newString;
      break;
    default:
      console.error(`Wrong dispatch type of ${action.type}`);
      break;
  }
  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newString: text,
});

export default profileReducer;
