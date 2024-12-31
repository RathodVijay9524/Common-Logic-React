import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with your API base URL
  timeout: 10000, // Timeout after 10 seconds
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;
    if (error.response.status === 500 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
