import classes from "./Messages.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
  let DialogElements = props.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let MessageElements = props.messages.map((message) => {
    return <Message message={message.text} id={message.id} />;
  });

  return (
    <div className={classes.dialogs}>
      <section className={classes.dialogsItems}>{DialogElements}</section>
      <section className={classes.messages}>
        {MessageElements}
        <div className={classes.newMessageArea}>
          <textarea
            className={classes.newMessageText}
            cols="70"
            rows="3"
          ></textarea>
          <button className={classes.sentMessageButton}>-></button>
        </div>
      </section>
    </div>
  );
};

export default Messages;
