import classes from './myPosts.module.css';
import Post from "./post/post";

const MyPosts = () => {
    return (
        <section className={classes.postsSection}>
            <div>My posts</div>
            <div>New posts</div>
            <section className={classes.posts}>
                <Post message="Good morning everyone!" likes="15"/>
                <Post message="What a great day it is." likes="8"/>
            </section>

        </section>
    )
}

export default MyPosts;