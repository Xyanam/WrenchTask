import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/userSlice";
import posts from "./slices/postsSlice";

export const store = configureStore({
  reducer: {
    user,
    posts,
  },
});
