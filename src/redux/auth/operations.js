import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, setToken } from "../instance";
import { toast } from "react-toastify";
import { signin, signup } from "../../service/api";

export const registration = createAsyncThunk(
  "user/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await signup(credentials);
      setToken(data.token);
      toast.success("Successful operation");
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Email or password invalid");
          break;
        case 404:
          toast.error("Service not found");
          break;
        case 409:
          toast.error("Such email already exists");
          break;
        case 500:
          toast.error("Server error");
          break;
        default:
          return rejectWithValue(error);
      }
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await signin(credentials);
      console.log(data);
      setToken(data.token);
      toast.success("Successful operation");
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request (invalid request body)");
          break;
        case 401:
          toast.error("Email or password invalid");
          break;
        case 404:
          toast.error("Service not found");
          break;
        case 500:
          toast.error("Server error");
          break;
        default:
      }
      return rejectWithValue(error.message);
    }
  }
);
