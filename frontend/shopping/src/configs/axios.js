import axios from "axios";
import refreshToken from "services/refreshToken";
import { getCookie, setCookies } from "utils/cookies/cookies";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("access");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if ((error.response.status === 401) & !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await refreshToken();
      if (!response?.response) return;
      setCookies(response.response.data);

      return api(originalRequest);
    }
  }
);

export default api;
