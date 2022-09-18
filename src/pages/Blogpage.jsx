import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Container, List, ListItemText} from "@mui/material";


const Blogpage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      // .then(response => response.data)
      .then(response => setPosts(response.data))

  }, []);
  return (
    <Container sx={{marginTop: 5}} maxWidth='md'>
      <div>
        <h1>Наши публикации</h1>
        <List>
        {
          posts.map(post => (
            <Link style={{textDecoration: 'none', color: 'black'}} key={post.id} to={`/posts/${post.id}`}>
              <ListItemText>{post.title}</ListItemText>
            </Link>
          ))
        }
        </List>
      </div>
    </Container>
  );
};

export default Blogpage;