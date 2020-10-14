import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to={path}>{props.name}</NavLink>
          </div>)
}

const Message= (props) => {
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {  

  let dialogsData = [
    { id: 1, name: 'Tana'},
    { id: 2, name: 'Semion'},
    { id: 3, name: 'Anastasja'},
    { id: 4, name: 'Nik'},
  ];
  let messgesData = [
    { id: 1, message: 'How are you?'},
    { id: 2, message: 'Hi'},
    { id: 3, message: 'Yo'},
    { id: 4, message: 'Yo'},
  ];


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
       < DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
       < DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
       < DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
       < DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
       
      </div>
      <div className={s.messages}>
        <Message message={messgesData[0].message} />
        <Message message={messgesData[1].message} />
        <Message message={messgesData[2].message} />
        <Message message={messgesData[3].message} />
        
      </div>
    </div>
  );
};

export default Dialogs;
