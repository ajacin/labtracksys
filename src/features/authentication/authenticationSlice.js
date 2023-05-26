import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  message: "not authenticated",
  token: "",
  refreshToken: "",
  userDetails: {
    username: "",
    role: "",
    firstName: "",
    lastName: "",
  },
};

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    auth: initialAuthState,
  },
  reducers: {
    updateAuthenticated: (state, param) => {
      const { payload } = param;
      state.auth = { ...state.auth, ...payload };
    },
    unAuthenticate: (state) => {
      state.auth = { ...state.auth, ...initialAuthState };
    },
  },
});

export const { updateAuthenticated, unAuthenticate } =
  authenticationSlice.actions;
export default authenticationSlice.reducer;
