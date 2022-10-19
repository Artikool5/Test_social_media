import classes from "./myPosts.module.css";
import Post from "./post/post";

const MyPosts = (props) => {
  let Posts = props.posts.map((post) => {
    return <Post message={post.text} likes={post.likes} />;
  });

  return (
    <section className={classes.postsSection}>
      <div>My posts</div>
      <div>New posts</div>
      <section className={classes.posts}>{Posts}</section>
    </section>
  );
};

export default MyPosts;
