import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/state";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let textMessage = newMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(textMessage);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <h3>Dialogs</h3>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newMessageText}
        />
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
