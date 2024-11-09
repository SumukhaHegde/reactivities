import { createSlice } from "@reduxjs/toolkit";

const LoggedInUserStore = createSlice({
  name: "LoggedInUser",
  initialState: {
    user: null,
  },
  reducers: {
    registerLoggedInUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { registerLoggedInUser } = LoggedInUserStore.actions;
export default LoggedInUserStore;
