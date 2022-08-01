import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.login = action.payload;
    },
    removeUser(state) {
      state.login = "";
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
