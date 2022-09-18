import React from 'react'
import s from './Post.module.css'
import {IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = (props) => {
  return (
    <div className={s.post_item}>
      <div className={s.post_content}>
        <img
          className={s.post_avatar}
          src='https://static.vecteezy.com/system/resources/thumbnails/004/476/164/small_2x/young-man-avatar-character-icon-free-vector.jpg'
          alt='avatar2'/>
        <div>
          <p>{props.message}</p>
        </div>
      </div>
      <div className={s.post_action}>
        <span>{props.likes}</span>
        <IconButton size="small" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {/*<span> Like</span>*/}
      </div>
    </div>
  )
}

export default Post