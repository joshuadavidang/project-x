import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    value: { email: "", isAuthenticated: "", uid: "" },
  },
  // functions to alter values
  reducers: {
    LOGIN_ACTION: (state, action) => {
      // new state, value changed after logging in
      state.value = action.payload;
    },
    LOGOUT_ACTION: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { LOGIN_ACTION, LOGOUT_ACTION } = authenticationSlice.actions;

export default authenticationSlice.reducer;
