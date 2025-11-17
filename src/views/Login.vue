<template>
  <div id="login-screen">
    <div class="w-full max-w-sm login-card text-center">

      <div class="mb-4 flex justify-center">
        <svg class="w-12 h-12 text-white bg-blue-600 p-2 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M9.75 17L9 20l-2-1m5.053-12.053l2.493 2.493a7 7 0 000 9.899m-12.56-2.493a7 7 0 010-9.899m4.992 4.992h.01">
          </path>
        </svg>
      </div>

      <h1 class="text-3xl font-extrabold text-gray-800 mb-2">Welcome</h1>
      <p class="text-gray-500 mb-8 px-4">
        Sign in to access your secure, personalized assistant experience.
      </p>

      <!-- Login Button -->
      <button id="google-sign-in-btn" @click="loginWithGoogle"
        class="w-full flex items-center justify-center px-6 py-3 rounded-xl shadow-md text-lg font-bold transition duration-150">

        <div class="w-8 h-8 mr-3 flex items-center justify-center bg-white rounded-full p-1">
          <svg class="w-full h-full" viewBox="0 0 48 48" fill="none">
            <path d="M44.5 20H44V20.5H24V28.5H35.3C34.7 31.3 32.7 33.5 29.8 34.9L30.6 35.7L37 40.8L37.4 41.1C35.2 43 32.7 44 29.8 44C21.7 44 15 37.3 15 29C15 20.7 21.7 14 29.8 14C33.6 14 37 15.3 39.4 17.6L45 23.1L44.5 23.6C44.4 23.7 44.2 23.8 44 23.9C43.8 24 43.6 24.1 43.4 24.2C41.9 25.1 40.5 25.8 38.9 26.3C40.6 24.6 42.1 22.4 42.9 20H44.5Z"
              fill="#4285F4" />
          </svg>
        </div>

        Login with Gmail
      </button>

      <p class="text-xs text-gray-400 mt-6">
        Securely powered by Google Identity.
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "../../axiosIntance";

const router = useRouter();
const route = useRoute();

/* ------------------------------
   1️⃣ Login → Redirect to backend
------------------------------ */
const loginWithGoogle = () => {
  const api = import.meta.env.VITE_APP_API_BASE_URL;
  window.location.href = `${api}/auth/google`;
};

/* -------------------------------------------------------
   2️⃣ After Google Login → Token arrives in ?token=xxxx
--------------------------------------------------------*/
onMounted(() => {
  const token = route.query.token;

  if (token) {
    // Set axios global Authorization header
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // Optional: also store in memory (in case reload)
    window.__AUTH_TOKEN__ = token;

    // Redirect user to dashboard
    router.push("/");
  }
});
</script>

<style scoped>
#login-screen {
  display: flex;
  justify-content: center !important;
  align-items: center;
  min-height: 100vh;
}

.login-card {
  background-color: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}

#google-sign-in-btn {
  background-color: #4285F4;
  color: white;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -2px rgba(0, 0, 0, 0.1);
}

#google-sign-in-btn:hover {
  background-color: #357ae8;
  transform: scale(1.01);
}
</style>
