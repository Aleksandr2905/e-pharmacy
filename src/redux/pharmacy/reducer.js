import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getProducts,
  getAllStores,
  getNearestStores,
  getReviews,
} from "./operations";

const initialState = {
  stores: [],
  nearestStores: [],
  reviews: [],
  products: [],
  currentPage: 1,
  totalPages: null,
  totalProducts: null,
  isLoading: false,
  error: null,
  openModal: false,
  modalContent: null,
};

export const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState,
  reducers: {
    setModalStatus: (state, { payload }) => {
      state.openModal = payload;
    },
    setModalContent: (state, { payload }) => {
      state.modalContent = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNearestStores.fulfilled, (state, { payload }) => {
        state.nearestStores = payload;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.reviews = payload;
      })
      .addCase(getAllStores.fulfilled, (state, { payload }) => {
        state.stores = payload;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.products = payload.products;
        state.currentPage = payload.currentPage;
        state.totalPages = payload.totalPages;
        state.totalProducts = payload.totalProducts;
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

export const { setModalStatus, setModalContent } = pharmacySlice.actions;
export const pharmacyReducer = pharmacySlice.reducer;
