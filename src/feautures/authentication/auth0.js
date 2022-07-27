import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { auth: false },
  reducers: {
    authenticate: (state, action) => {
      state.auth = action.payload;
    },
  },
});
const { actions, reducer } = authSlice;
export const { authenticate } = actions;
export default reducer;
