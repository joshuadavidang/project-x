import { createSlice } from "@reduxjs/toolkit";

export const avatarNameSlice = createSlice({
  name: "avatar",
  initialState: { value: { avatarName: "" } },
  // functions to alter values
  reducers: {
    AVATAR_NAME_ACTION: (state, action) => {
      // new state, value changed after logging in
      state.value = action.payload;
    },
  },
});

export const { AVATAR_NAME_ACTION } = avatarNameSlice.actions;

export default avatarNameSlice.reducer;
