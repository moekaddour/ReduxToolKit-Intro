import React, { useState } from 'react'
import { TextField, Button, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addPost, fetchPost } from '../redux/slices/postSlice'
const AddPost = () => {
  const [post, setPost] = useState('')
  const dispatch = useDispatch()

  const addPostHandler = () => {
    if (!!post) {
      dispatch(addPost({ id: Math.round(Math.random() * 1000), title: post, body: 'whatever' }))
      setPost('')
    }
  }

  const fetchPostHandler = () => {
    dispatch(fetchPost('https://jsonplaceholder.typicode.com/posts'))
  }
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <TextField
        id="standard-basic"
        placeholder="add post"
        variant="standard"
        value={post}
        onChange={e => setPost(e.target.value)}
      />
      <Button variant="text" onClick={addPostHandler}>
        Add Post
      </Button>
      <Button variant="text" onClick={fetchPostHandler}>
        Fetch Posts
      </Button>
    </Grid>
  )
}

export default AddPost
