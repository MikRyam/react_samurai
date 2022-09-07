import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? s.active_dialog : '';

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id;
  return (
        // <div className={s.dialog + ' ' + s.active}>
        <div className={s.dialog}>
          <NavLink className={setActive} to={path}>{props.name}</NavLink>
        </div>
  );
};

export default DialogItem;
