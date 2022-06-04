import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: []
}
const AllUsers = createSlice({
  name: 'allUsers',
  initialState,
  reducers: {
    addNewUser: ( state, action ) => {
      console.log('Payload', action.payload)
      console.log('Estado pela action', state.users)
      state.users = [...state.users, action.payload]
    }
  }
})

export const {
  addNewUser
} = AllUsers.actions;

export const allUsersData = (state) => state.allUsers;

export default AllUsers.reducer;