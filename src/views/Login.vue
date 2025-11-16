<template>
  <div  id="login-screen">
  <div class="w-full max-w-sm login-card text-center">
        
        <!-- App Icon Placeholder (Kept the blue primary color) -->
        <div class="mb-4 flex justify-center">
            <svg class="w-12 h-12 text-white bg-blue-600 p-2 rounded-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-2-1m5.053-12.053l2.493 2.493a7 7 0 000 9.899m-12.56-2.493a7 7 0 010-9.899m4.992 4.992h.01"></path>
            </svg>
        </div>

        <h1 class="text-3xl font-extrabold text-gray-800 mb-2">Welcome</h1>
        <p class="text-gray-500 mb-8 px-4">
            Sign in to access your secure, personalized assistant experience.
        </p>
        
        <button id="google-sign-in-btn" @click="loginWithGoogle" class="w-full flex items-center justify-center px-6 py-3 rounded-xl shadow-md text-lg font-bold transition duration-150">
            
            <!-- Google SVG Icon: Wrapped in a white, circular container to make it pop against the blue button -->
            <div class="w-8 h-8 mr-3 flex items-center justify-center bg-white rounded-full p-1">
                <svg class="w-full h-full" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44.5 20H44V20.5H24V28.5H35.3C34.7 31.3 32.7 33.5 29.8 34.9L30.6 35.7L30.6 35.8L37 40.8L37.4 41.1C35.2 43 32.7 44 29.8 44C21.7 44 15 37.3 15 29C15 20.7 21.7 14 29.8 14C33.6 14 37 15.3 39.4 17.6L45 23.1L44.5 23.6C44.4 23.7 44.2 23.8 44 23.9C43.8 24 43.6 24.1 43.4 24.2C41.9 25.1 40.5 25.8 38.9 26.3C40.6 24.6 42.1 22.4 42.9 20H44.5Z" fill="#4285F4"/>
                    <path d="M15 29C15 37.3 21.7 44 29.8 44C32.7 44 35.2 43 37.4 41.1L30.6 35.7C29.4 36.3 27.9 36.6 26.4 36.6C20.6 36.6 15.9 31.9 15.9 26.1H15.8L15 26.8V29Z" fill="#34A853"/>
                    <path d="M29.8 14C33.6 14 37 15.3 39.4 17.6L45 23.1L44.5 23.6L37.4 17.6L36.7 17.2C33.6 14.8 30.6 14 27.6 14C23.5 14 19.8 15.7 17.2 18.2L15 20.4L15 29H15.8L17.2 20.4C19.8 17.9 23.5 16.3 27.6 16.3C30.6 16.3 33.6 17 36 18.5L37.4 17.6Z" fill="#FBBC04"/>
                    <path d="M17.2 18.2C19.8 15.7 23.5 14 27.6 14C30.6 14 33.6 14.8 36 18.5L37.4 17.6C35.2 15.7 32.7 14 29.8 14H24L24 16.5H29.8C33.6 16.5 37 17.8 39.4 20.1L45 25.6L44.5 26.1L37.4 20.1C36.7 19.7 36 19.4 35.3 19.1C34.6 18.8 34 18.5 33.3 18.2C32.7 17.9 32 17.6 31.4 17.4C30.7 17.2 30.1 17.1 29.4 17.1C28.8 17 28.1 16.9 27.4 16.9C26.7 16.9 26 16.9 25.3 17C24.7 17 24 17.1 23.3 17.3C22.7 17.4 22 17.6 21.4 17.8C20.7 18 20.1 18.3 19.4 18.6C18.8 18.9 18.2 19.2 17.6 19.6L17.2 19.9L17.2 19.9L15 22.1L15 14Z" fill="#EA4335"/>
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
const loginWithGoogle = () => {
    const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;
    window.location.href = `${baseUrl}/auth/google`;
    console.log(baseUrl);
};
</script>
<style scoped>
 /* General styling for a clean, centered look */
        #login-screen{
              display: flex;
              justify-content: center !important;
              align-items: center;
              min-height: 100vh;
        }

        /* Styling for the login card */
        .login-card {
            background-color: white;
            padding: 2.5rem;
            border-radius: 1.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); /* Stronger shadow */
            transition: all 0.3s ease;
        }

        /* Custom style for the Gmail button to use Google's primary color */
        #google-sign-in-btn {
            background-color: #4285F4; /* Google Blue */
            color: white;
            border: none;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        }

        /* Hover effect to darken the button slightly */
        #google-sign-in-btn:hover {
            background-color: #357ae8; /* Slightly darker blue */
            transform: scale(1.01);
        }
</style>