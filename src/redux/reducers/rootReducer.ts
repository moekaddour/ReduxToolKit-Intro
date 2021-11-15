import { combineReducers } from 'redux'
import postReducer from '../slices/postSlice'

export default combineReducers({ posts: postReducer })
