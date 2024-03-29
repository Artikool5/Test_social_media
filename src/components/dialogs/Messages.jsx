import React from "react";
import classes from "./Messages.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Messages = (props) => {
  let DialogElements = props.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });

  let MessageElements = props.messages.map((message) => {
    return <Message message={message.text} id={message.id} />;
  });

  let newMessageElement = React.createRef();

  const changeMessageBoxText = () => {
    let text = newMessageElement.current.value;
    props.changeMessageBoxText(text);
    newMessageElement.current.value = props.newMessageText;
  };
  return (
    <div className={classes.dialogs}>
      <section className={classes.dialogsItems}>{DialogElements}</section>
      <section className={classes.messages}>
        {MessageElements}
        <div className={classes.newMessageArea}>
          <textarea
            ref={newMessageElement}
            onChange={changeMessageBoxText}
            className={classes.newMessageText}
            value={props.newMessageText}
            cols="70"
            rows="3"
          ></textarea>
          <button
            className={classes.sentMessageButton}
            onClick={props.sendMessage}
          >
            &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Messages;
