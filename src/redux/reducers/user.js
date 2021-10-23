import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { value: { name: "", age: 0, email: "" } },
  // functions to alter values
  reducers: {
    LOGIN_ACTION: (state, action) => {
      // do something with state, to change the value after login in
      state.value = action.payload;
    },
  },
});

export const { LOGIN_ACTION } = userSlice.actions;

export default userSlice.reducer;
