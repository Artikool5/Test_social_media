import classes from "./post.module.css";

const Post = (props) => {
  return (
    <article className={classes.item}>
      {props.message}
      <div>{props.likes} likes</div>
    </article>
  );
};

export default Post;
