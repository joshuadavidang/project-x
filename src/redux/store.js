import { configureStore } from "@reduxjs/toolkit";
import authenticationSlice from "./reducers/authentication";

export default configureStore({
  reducer: {
    authenticationReducer: authenticationSlice,
  },
});
