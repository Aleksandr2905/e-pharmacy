import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../instance";

export const getNearestStores = createAsyncThunk(
  "pharmacy/nearestStores",
  async (body, { rejectWithValue }) => {
    try {
      const { limit = 6 } = body;
      const { data } = await instance.get(`/stores/nearest?limit=${limit}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getReviews = createAsyncThunk(
  "pharmacy/reviews",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/customer-reviews");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllStores = createAsyncThunk(
  "pharmacy/stores",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/stores");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "pharmacy/products",
  async (body, { rejectWithValue }) => {
    try {
      const { category = "", name = "", page = "", limit = "" } = body;
      const { data } = await instance.get(
        `/products?category=${category}&name=${name}&page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
