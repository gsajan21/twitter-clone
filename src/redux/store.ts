import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice.ts";
import userReducer from "./user/userSlice.ts";
import postReducer from "./post/postSlice.ts";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
