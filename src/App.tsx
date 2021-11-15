import { Provider } from 'react-redux'
import store from './redux/storeConfig/store'
import AddPost from './components/AddPost'
import PostsList from './components/PostsList'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddPost />
        <PostsList />
      </div>
    </Provider>
  )
}

export default App
