import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./reducers/authentication";
import avatarNameSlice from "./reducers/avatarName";
import contentSlice from "./reducers/content";

export default configureStore({
  reducer: {
    authenticationReducer: authenticationSlice,
    contentReducer: contentSlice,
    avatarReducer: avatarNameSlice,
  },
});
