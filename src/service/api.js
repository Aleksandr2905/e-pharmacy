import axios from "axios";

const BASE_URL = "https://e-pharmacy-backend-q1kh.onrender.com/api";
const $instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const setToken = (token) => {
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  $instance.defaults.headers.common.Authorization = "";
};

export const signup = async (userData) => {
  const { data } = await $instance.post("/user/register", userData);
  setToken(data.token);
  return data;
};

export const signin = async (userData) => {
  const { data } = await $instance.post("/user/login", userData);
  console.log(data);
  setToken(data.token);
  return data;
};
