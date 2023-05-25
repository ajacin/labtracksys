import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    auth: {
      message: "not authenticated",
      token: "",
      refreshToken: "",
      userDetails: {
        username: "",
        role: "",
        firstName: "",
        lastName: "",
      },
    },
  },
  reducers: {
    updateAuthenticated: (state, param) => {
      const { payload } = param;
      state.auth = { ...state.auth, ...payload };
    },
  },
});

export const { updateAuthenticated } = authenticationSlice.actions;
export default authenticationSlice.reducer;
