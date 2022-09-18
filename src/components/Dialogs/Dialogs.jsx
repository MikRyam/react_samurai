import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const Dialogs = (props) => {

  let state = props.dialogsPage;

  const dialogsElements = state.dialogs.map(dialog => (<DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>))
  const messagesElements = state.messages.map(message => (
    <Message message={message.message} key={message.id} id={message.id}/>))

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

          <Stack className={s.message_input_stack} direction="row" spacing={0}>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Write a message..."
              // style={{height: 26}}
              minRows={2}
              value={newMessageBody}
              onChange={onNewMessageChange}
            />


            {/*<textarea value={newMessageBody}*/}
            {/*          onChange={onNewMessageChange}*/}
            {/*          cols="80" rows="2"*/}
            {/*          placeholder='Write a message...'></textarea>*/}

            <Button onClick={onSendMessageClick} variant="contained" endIcon={<SendIcon/>}>
              Send
            </Button>
            {/*<button onClick={onSendMessageClick}>Send</button>*/}
          </Stack>
        </div>
      </div>

    </div>

  );
};

export default Dialogs;
