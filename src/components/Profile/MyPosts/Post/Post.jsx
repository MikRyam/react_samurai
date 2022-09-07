import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.post_item}>
      <img
        src='https://static.vecteezy.com/system/resources/thumbnails/004/476/164/small_2x/young-man-avatar-character-icon-free-vector.jpg'
        alt='avatar'/>
      <div>
        <p>{props.message}</p>
      </div>
      <div>
        <span>{props.likes}</span>
        <span> Like</span>
      </div>
    </div>
  )
}

export default Post