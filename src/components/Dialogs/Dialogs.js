import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs
  .map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

  let messagesElements = props.state.messages
  .map( m => <Message message={m.message} /> );

  let newMessageElements = React.createRef();

  let addMessage = () => {
   let text = newMessageElements.current.value;
   alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
      <h3>Dialogs</h3>
        {dialogsElements}
      </div>
      <div className={s.messages}>
      <textarea ref={newMessageElements}></textarea>
      <div>
          <button onClick={addMessage}>Add message</button>
        </div>
       {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
