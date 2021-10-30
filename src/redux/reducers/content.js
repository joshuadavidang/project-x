import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: { value: { subject: "no subject", isLoaded: false } },
  // functions to alter values
  reducers: {
    CONTENT_ACTION: (state, action) => {
      // new state, value changed after logging in
      state.value = action.payload;
    },
  },
});

export const { CONTENT_ACTION } = contentSlice.actions;

export default contentSlice.reducer;
