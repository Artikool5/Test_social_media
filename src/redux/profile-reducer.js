const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initState = {
  postsData: [
    { id: 1, text: "Good morning everyone!", likes: "5" },
    { id: 2, text: "What a great day it is.", likes: "5" },
    { id: 3, text: "React is cool", likes: "27" },
    {
      id: 4,
      text: "But HTML is still better programming language than JavaScript",
      likes: "63",
    },
    { id: 5, text: "JavaScript's wierd sometimes", likes: "31" },
    { id: 6, text: "I'm gonna scream", likes: "1" },
  ],
  newPostText: "Nice post",
};

const profileReducer = (state = initState, action) => {
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
