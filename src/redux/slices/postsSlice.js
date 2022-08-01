import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setData } = postsSlice.actions;
export default postsSlice.reducer;
