import { addPost, removePost, fetchPost } from '../slices/postSlice'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import store from '../storeConfig/store'

describe('postSlice', () => {
  it('should test addPost action', () => {
    const post = { id: 1, title: 'title test', body: 'body test' }
    store.dispatch(addPost(post))
    expect(store.getState().posts.posts).toHaveLength(1)
  })
  it('should test removePost action', () => {
    store.dispatch(removePost({ id: 1 }))
    expect(store.getState().posts.posts).toHaveLength(0)
  })
  it('should test fetch posts api call', async () => {
    const mock = new MockAdapter(axios)
    const post = { id: 2, title: 'title test', body: 'body test' }
    mock.onGet('/posts/fetchPost').reply(200, [post])
    await store.dispatch(fetchPost('/posts/fetchPost'))
    expect(store.getState().posts.status).toEqual('success')
  })
})
