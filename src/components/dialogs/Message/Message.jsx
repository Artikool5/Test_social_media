import classes from "./../Messages.module.css";

const Message = (props) => {
  return <article className={classes.message}>{props.message}</article>;
};

export default Message;
