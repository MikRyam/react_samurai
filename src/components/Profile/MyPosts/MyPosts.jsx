import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElements = props.posts.map( post => (<Post id={post.id} message={post.message} likes={post.likesCount} />))
  return (
    <div className={s.posts_area}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  )
}

export default MyPosts