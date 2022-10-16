import classes from './post.module.css';


const Post = (props) => {
    return (
        <article className={classes.item}>{props.message}
        <span>{props.likes} likes</span>
        </article>
    )
}

export default Post;