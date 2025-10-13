<template>
  <header class="w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between py-3 border-b border-gray-100">
                <h1 class="text-xl font-semibold text-gray-900">Ask Anything</h1>
                <button class="text-gray-400 hover:text-gray-600 transition">
                    <!-- Close Icon -->
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <div class="flex items-center justify-between pb-3">
                <div class="flex space-x-4">
                    <button class="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1">Chat</button>
                    <button class="text-sm font-medium text-gray-500 hover:text-gray-700 pb-1">History</button>
                </div>
                <div class="flex items-center space-x-3">
                    <!-- NEW: Connect Hubspot Button -->
                    <button class="flex items-center text-sm font-medium px-3 py-1 bg-white border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition shadow-sm">
                        <!-- Hubspot Icon Placeholder (e.g., brief case or link icon) -->
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                        Connect Hubspot
                    </button>
                    
                    <!-- New Thread Button -->
                    <button class="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition">
                        <!-- Plus Icon -->
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                        New thread
                    </button>
                </div>
            </div>
        </div>
    </header>
  </template>