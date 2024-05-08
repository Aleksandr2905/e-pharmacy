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