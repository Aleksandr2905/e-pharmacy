import { createSlice } from "@reduxjs/toolkit";
import { registration } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
    phone: null,
  },
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder.addCase(registration.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    }),
});

export const authReducer = authSlice.reducer;
