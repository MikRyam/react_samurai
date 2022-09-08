import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  const dialogsElements = state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
  const messagesElements = state.messages.map(message => (<Message message={message.message} id={message.id}/>))

  let newMessageBody = state.newMessageBody

  const onSendMessageClick = () => {
    props.sendMessage();
  }
  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_wrapper}>
        <div className={s.dialog_items}>
          {dialogsElements}
        </div>
      </div>
      <div className={s.messages_wrapper}>
        <div className={s.messages}>
          {messagesElements}
        </div>
        <div className={s.message_input_block}>
          <div>
            <textarea value={newMessageBody}
                      onChange={onNewMessageChange}
                      cols="80" rows="2"
                      placeholder='Write a message...'></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Dialogs;
