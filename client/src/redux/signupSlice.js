import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: ''
}

export const signupSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    click: (state) => {
      state.message = 'signup button clicked';
    },
  },
})

// Action creators are generated for each case reducer function
export const { click } = signupSlice.actions

export default signupSlice.reducer