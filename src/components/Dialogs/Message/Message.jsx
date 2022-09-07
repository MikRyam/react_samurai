import React from 'react';
import s from './Meassage.module.css'

const Message = (props) => {
  return (
        <div className={s.message}>
          {props.message}
        </div>
  );
};

export default Message;
