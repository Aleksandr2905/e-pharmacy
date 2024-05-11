import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, registration } from "./operations";

const initialState = {
  userData: { username: null, email: null, phone: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(registration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.email = payload.email;
        state.phone = payload.phone;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.userData = payload;
        // state.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
      })

      .addMatcher(isAnyOf(registration.pending, login.pending), (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(registration.fulfilled, login.fulfilled), (state) => {
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(registration.rejected, login.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
