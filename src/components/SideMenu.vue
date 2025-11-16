<template>
  <aside class="w-full lg:w-64 bg-white border-b lg:border-r lg:border-b-0 p-6 shadow-md lg:shadow-none flex-shrink-0">
            <div class="mb-10">
                <h1 class="text-xl font-extrabold text-gray-800">PostMeet <span class="text-indigo-600">AI</span></h1>
            </div>

            <nav class="space-y-2 mb-10">
                <router-link 
                    to="/" 
                    class="flex items-center space-x-3 p-3 rounded-xl transition"
                    active-class="bg-indigo-50 text-indigo-700 font-semibold"
                >
                    <i class="fa-solid fa-calendar-check w-5 h-5"></i>
                    <span>Upcoming Meetings</span>
                </router-link>

                <router-link 
                    to="/past-meetings" 
                    class="flex items-center space-x-3 p-3 rounded-xl transition"
                    active-class="bg-indigo-50 text-indigo-700 font-semibold"
                >
                    <i class="fa-solid fa-clock w-5 h-5"></i>
                    <span>Past Meetings</span>
                </router-link>

                <router-link 
                    to="/settings" 
                    class="flex items-center space-x-3 p-3 rounded-xl transition"
                    active-class="bg-indigo-50 text-indigo-700 font-semibold"
                >
                    <i class="fa-solid fa-gear w-5 h-5"></i>
                    <span>Settings</span>
                </router-link>

                <router-link 
                    to="/logout" 
                    class="flex items-center space-x-3 p-3 rounded-xl transition"
                    active-class="bg-indigo-50 text-indigo-700 font-semibold"
                >
                    <i class="fa-solid fa-right-from-bracket w-5 h-5"></i>
                    <span>Logout</span>
                </router-link>

            </nav>
        </aside>
</template>