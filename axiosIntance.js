import router from '@/router'; // If you're using Vue Router
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// ⬇️ Response Interceptor
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Clear any local client state (optional)
      // localStorage.removeItem("user")

      // Redirect to login
      router.push('/login');
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
