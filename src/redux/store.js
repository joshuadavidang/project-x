import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./reducers/authentication";
import contentSlice from "./reducers/content";

export default configureStore({
  reducer: {
    authenticationReducer: authenticationSlice,
    contentReducer: contentSlice,
  },
});
