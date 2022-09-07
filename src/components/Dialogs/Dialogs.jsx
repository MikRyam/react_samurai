import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  const dialogsElements = props.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
  const messagesElements = props.messages.map(message => (<Message message={message.text} id={message.id}/>))

  return (
    <div className={s.dialogs}>
      <div className={s.dialog_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>

  );
};

export default Dialogs;
