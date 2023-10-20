import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : null,
};

export const userSlice = createSlice({
  name: "logininfo",
  initialState,
  reducers: {
    loginUsers: (state, action) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { loginUsers } = userSlice.actions;
export default userSlice.reducer;
