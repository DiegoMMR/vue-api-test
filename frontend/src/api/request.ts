import axios from "axios";
import { useAuthStore } from "../stores/auth";
import type { IMember } from "../interfaces/member";
// Create axios instance
const service = axios.create({
  baseURL: "http://localhost:8081",
  timeout: 10000, // Request timeout
});

// Request intercepter
service.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const token = authStore.getToken;

    if (token) {
      config.headers["Authorization"] = "Bearer " + token; // Set JWT token
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// response pre-processing
service.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
