import { combineReducers } from 'redux'

import postsReducer from './postreducers'

const rootReducer = combineReducers({
  posts: postsReducer,
})

export default rootReducer