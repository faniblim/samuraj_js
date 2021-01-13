import React from "react";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (<DialogItem name={d.name} key={d.id} id={d.id} />));
  let messagesElements = state.messages.map((m) => (<Message message={m.message} key={m.id} />));
  let newMessageBody = state.newMessageBody;
  // if (!props.isAuth) return <Redirect to={"/login"} />;
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
