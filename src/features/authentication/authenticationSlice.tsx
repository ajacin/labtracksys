import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserDetails {
  username: string;
  role: string;
  firstName: string;
  lastName: string;
}

interface AuthState {
  message: string;
  token: string;
  refreshToken: string;
  userDetails: UserDetails;
}

const initialAuthState: AuthState = {
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
    updateAuthenticated: (state, param: PayloadAction<AuthState>) => {
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
