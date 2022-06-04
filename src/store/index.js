import { configureStore } from '@reduxjs/toolkit'

import allUsers from './module/user/reducer';

export default configureStore({
  reducer: {
    allUsers: allUsers
  }
})