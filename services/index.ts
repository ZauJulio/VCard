import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL ?? "http://localhost:3000",
  withCredentials: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Content-Type":
      "application/x-www-form-urlencoded; charset=UTF-8;application/json",
  },
});

export default api;
