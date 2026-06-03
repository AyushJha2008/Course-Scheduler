import axios from "axios";

const API = axios.create({
  baseURL:   import.meta.env.MODE === "development"
    ? "http://localhost:8000/api"
    : "https://course-scheduler-xouz.onrender.com/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;