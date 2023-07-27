import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
   
  },
});

export const {
  addUser,
} = masterSlice.actions;

export default masterSlice.reducer;