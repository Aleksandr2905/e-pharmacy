import { createSlice } from "@reduxjs/toolkit";
import { getNearestStores } from "./operations";

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
    builder.addCase(getNearestStores.fulfilled, (state, { payload }) => {
      state.nearestStores = payload;
      state.isLoading = false;
    });
  },
});

export const pharmacyReducer = pharmacySlice.reducer;
