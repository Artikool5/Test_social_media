import classes from "./myPosts.module.css";
import Post from "./post/post";
import React from "react";

const MyPosts = (props) => {
  let Posts = props.posts.map((post) => {
    return <Post message={post.text} likes={post.likes} />;
  });
  let newPostElement = React.createRef();

  let onButtonClick = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };
  return (
    <section className={classes.postsSection}>
      <div>My posts</div>
      <div>New posts</div>
      <textarea
        name="newPostText"
        id="newPostText"
        cols="50"
        rows="5"
        ref={newPostElement}
      ></textarea>
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
