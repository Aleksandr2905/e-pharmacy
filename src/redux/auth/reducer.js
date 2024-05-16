import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { login, logout, registration } from "./operations";

const initialState = {
  username: "",
  email: "",
  phone: "",
  token: "",
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
        state.username = payload.user;
        state.email = payload.email;
        state.phone = payload.phone;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.username = payload;
        state.email = payload;
        state.token = payload;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, () => {
        return initialState;
      })

      .addMatcher(
        isAnyOf(registration.pending, login.pending, logout.pending),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(registration.fulfilled, login.fulfilled, logout.fulfilled),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(registration.rejected, login.rejected, logout.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const authReducer = authSlice.reducer;
