import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
interface post {
  id: number
  title: string
  body: string
}
interface PostState {
  posts: post[]
  status: string
}
const initialState = {
  posts: [],
  status: 'idle',
} as PostState

export const fetchPost = createAsyncThunk('posts/fetchPost', async (url: string, { dispatch, getState }) => {
  try {
    const { data } = await axios.get(`${url}`)
    return data
  } catch (error) {
    console.log(error)
  }
})
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state: PostState, action: PayloadAction<post>) => {
      state.posts.push(action.payload)
    },
    removePost: (state: PostState, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id)
      state.posts.splice(index, 1)
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = 'success'
        state.posts = action.payload
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = 'failed'
      }),
})

export const { addPost, removePost } = postSlice.actions
export default postSlice.reducer
