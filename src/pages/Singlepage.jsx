import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Container} from "@mui/material";
import Button from "@mui/material/Button";

const Singlepage = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
  }, [id]);
  return (
    <Container sx={{p: 6}} maxWidth='md'>
      <Button onClick={goBack} variant="outlined" color="success" size="small">Назад</Button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </Container>
  );
};

export default Singlepage;