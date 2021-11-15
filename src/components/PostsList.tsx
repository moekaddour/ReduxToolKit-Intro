import React from 'react'
import { Grid, Button } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../redux/hooks/reduxHooks'
import { removePost } from '../redux/slices/postSlice'
const PostsList = () => {
  const dispatch = useAppDispatch()
  const { posts, status } = useAppSelector(state => state.posts)
  const removePostHandler = (id: number) => {
    dispatch(removePost({ id }))
  }
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      {status === 'success' || status === 'idle' ? (
        posts.map((post: any) => (
          <Grid container direction="row" justifyContent="center" alignItems="center" item key={post.id}>
            <Grid item> {post.title}</Grid>
            <Grid item>
              <Button variant="text" onClick={() => removePostHandler(post.id)}>
                X
              </Button>
            </Grid>
          </Grid>
        ))
      ) : (
        <Grid item>Loading...</Grid>
      )}
    </Grid>
  )
}

export default PostsList
