import classes from "./myPosts.module.css";
import Post from "./post/post";
import React from "react";

const MyPosts = (props) => {
  let Posts = props.posts.map((post) => {
    return <Post message={post.text} likes={post.likes} />;
  });

  let newPostElement = React.createRef();

  let onButtonClick = () => {
    props.addPost(props.newPostText);
  };

  let onNewPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    newPostElement.current.value = props.newPostText;
  };

  return (
    <section className={classes.postsSection}>
      <div>My posts</div>
      <div>New posts</div>
      <textarea
        value={props.newPostText}
        name="newPostText"
        id="newPostText"
        cols="50"
        rows="5"
        ref={newPostElement}
        onChange={onNewPostChange}
      />
      <div>
        <button className={classes.button} onClick={onButtonClick}>
          Опубликовать
        </button>
      </div>
      <section className={classes.posts}>{Posts}</section>
    </section>
  );
};

export default MyPosts;
