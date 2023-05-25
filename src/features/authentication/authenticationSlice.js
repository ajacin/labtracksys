import { createSlice } from "@reduxjs/toolkit";

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    authentication: {
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
      state.authentication = { ...state.authentication, ...payload };
    },
  },
});

export const { updateAuthenticated } = authenticationSlice.actions;
export default authenticationSlice.reducer;
