import router from "@/router";
import { defineStore } from "pinia";
import axiosInstance from "../../axiosInstance";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: localStorage.getItem("userToken") || null,
    user: JSON.parse(localStorage.getItem("userData")) || null,
  }),
  actions: {
    setUserData(data) {
      this.token = data.token;
      this.user = data.user;
      localStorage.setItem("userToken", data.token);
      localStorage.setItem("userData", JSON.stringify(data.user));

      // Set the token in axios headers
      axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    },
    loadUser() {
      const token = localStorage.getItem('userToken');
      const user = localStorage.getItem('userData');
      if (token && user) {
        this.token = token;
        this.user = JSON.parse(user);
      }
    },
    logout() {
      this.token = null;
      this.user = null;
      localStorage.removeItem("userToken");
      localStorage.removeItem("userData");

      // Remove token from axios headers
      delete axiosInstance.defaults.headers.common["Authorization"];
      router.push('/login');

    },
  },
});
