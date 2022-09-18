import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => (
    <Post id={post.id} message={post.message} likes={post.likesCount}/>))

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.posts_area}>
      <h3>My posts</h3>
      <div className={s.addPostBlock}>

        {/*<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>*/}
        <TextareaAutosize
          aria-label="empty textarea"
          // style={{width: 800}}
          minRows={3}
          value={props.newPostText}
          onChange={onPostChange}
          ref={newPostElement}
        />

        <Button className={s.addPostButton} onClick={onAddPost} size="small" variant="contained" endIcon={<SendIcon/>}>
          Add post
        </Button>
        {/*<button onClick={onAddPost}>Add post</button>*/}

      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts