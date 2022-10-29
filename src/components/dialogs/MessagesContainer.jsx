import Messages from "./Messages";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

const MessagesContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let sendMessage = () => {
    //TODO Не очищается textarea, при удалении всего текста после первой отправки текст = undefined
    props.store.dispatch(addMessageActionCreator());
  };

  let changeMessageBoxText = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Messages
      sendMessage={sendMessage}
      changeMessageBoxText={changeMessageBoxText}
      dialogs={state.dialogsData}
      messages={state.messagesData}
    />
  );
};

export default MessagesContainer;
