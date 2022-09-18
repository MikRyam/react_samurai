import React from 'react';
import s from './News.module.css'
import {useState, useEffect} from "react";
import axios from "axios";
import {Container, Stack, Pagination, TextField, Link} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BASE_URL = 'http://hn.algolia.com/api/v1/search?'

const News = (props) => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('react');
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then(({data}) => {
      console.log(data)
      setPosts(data.hits)
      setPageQty(data.nbPages)
      if (data.nbPages < page) {
        setPage(1);
      }
    })
  }, [query, page])


  return (
    // <div className={s.news_wrap}>
      <Container sx={{marginTop: 5}} maxWidth='md'>
        <div className={s.hello}>Hello!</div>
        <TextField
          fullWidth
          label='query'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {/*<FormControl sx={{marginTop: 5}} fullWidth>*/}
        {/*  /!*<InputLabel id="demo-simple-select-label">Age</InputLabel>*!/*/}
        {/*  <Select*/}
        {/*    // labelId="demo-simple-select-label"*/}
        {/*    // id="demo-simple-select"*/}
        {/*    value={age}*/}
        {/*    label="Age"*/}
        {/*    onChange={handleChange}*/}
        {/*    displayEmpty*/}
        {/*    inputProps={{ 'aria-label': 'Without label' }}*/}
        {/*  >*/}
        {/*    <MenuItem value={10}>Ten</MenuItem>*/}
        {/*    <MenuItem value={20}>Twenty</MenuItem>*/}
        {/*    <MenuItem value={30}>Thirty</MenuItem>*/}
        {/*  </Select>*/}
        {/*</FormControl>*/}
        <FormControl sx={{ m: 1, minWidth: 220 }}>
          <Select
            className={s.selector}
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            style={{height: 30, borderRadius: 20, paddingLeft: 10}}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Stack spacing={2}>
          {!!pageQty && (
            <Pagination
              count={pageQty}
              page={page}
              onChange={(_, num) => setPage(num)}
              showFirstButton
              showLastButton
              sx={{marginY: 3, marginX: 'auto'}}
            />
          )}
          {
            posts.map(post => (
              <Link
                key={post.objectID}
                href={post.url}
                target='_blank'
              >
                {post.title || post.story_title}
              </Link>
            ))
          }
        </Stack>
      </Container>
    // </div>
  );
};

export default News;
