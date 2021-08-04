import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import study from './reducers/study'
import user from './reducers/user'
import good from './reducers/good'

const store = configureStore({
  reducer: {
    study,
    user,
    good
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
