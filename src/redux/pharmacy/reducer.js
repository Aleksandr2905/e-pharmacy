import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getNearestStores, getReviews } from "./operations";

const initialState = {
  nearestStores: [],
  reviews: [],
  isLoading: false,
  error: null,
};

export const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNearestStores.fulfilled, (state, { payload }) => {
        state.nearestStores = payload;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.reviews = payload;
      })

      .addMatcher(
        isAnyOf(getNearestStores.pending, getReviews.pending),
        (state) => {
          state.error = null;
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getNearestStores.fulfilled, getReviews.fulfilled),
        (state) => {
          state.error = null;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(getNearestStores.rejected, getReviews.rejected),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const pharmacyReducer = pharmacySlice.reducer;
