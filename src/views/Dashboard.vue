<template>
  <div>
    <main id="chat-content" class="flex-grow overflow-y-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        <div class="max-w-3xl mx-auto">
            
            <!-- Context Indicator -->
            <div class="text-center text-xs text-green-600 mb-6 flex items-center justify-center">
                <div class="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                Context set to all meetings · May 13, 2025
            </div>

            <!-- SYSTEM MESSAGE 1 (Text) -->
            <div class="flex justify-start mb-6">
                <div class="bg-white p-4 rounded-xl shadow-sm text-gray-800 max-w-[85%] lg:max-w-2xl">
                    I can answer questions about any Jump meeting. What do you want to know?
                </div>
            </div>

            <!-- USER MESSAGE 1 (Action Bubble) -->
            <div class="flex justify-end mb-6">
                <div class="bg-blue-600 text-white p-3 rounded-xl shadow-md cursor-pointer hover:bg-blue-700 transition flex items-center max-w-[85%] lg:max-w-xl">
                    <span class="mr-2">Find meetings I've had with</span>
                    <span class="inline-flex items-center bg-white text-gray-800 rounded-full px-3 py-1 text-sm font-semibold ml-1">
                        <img src="https://placehold.co/16x16/60A5FA/FFFFFF?text=B" class="w-4 h-4 rounded-full mr-1" alt="Bill">
                        Bill
                    </span>
                    <span class="mx-1">and</span>
                    <span class="inline-flex items-center bg-white text-gray-800 rounded-full px-3 py-1 text-sm font-semibold">
                        <img src="https://placehold.co/16x16/F87171/FFFFFF?text=T" class="w-4 h-4 rounded-full mr-1" alt="Tim">
                        Tim
                    </span>
                    <span class="ml-2">this month</span>
                </div>
            </div>

            <!-- SYSTEM MESSAGE 2 (Text introduction) -->
            <div class="flex justify-start mb-4">
                <div class="bg-white p-4 rounded-xl shadow-sm text-gray-800 max-w-[85%] lg:max-w-2xl">
                    Sure, here are some recent meetings that you, Bill, and Tim attended. I found 2 in May.
                </div>
            </div>
            
            <!-- DATE SEPARATOR 1 (Sticky) -->
            <div class="date-separator max-w-3xl mx-auto lg:px-0">
                <span class="text-xs font-semibold uppercase text-gray-400">8 THURSDAY</span>
            </div>

            <!-- SYSTEM MESSAGE 3 (Meeting Card 1) -->
            <div class="flex justify-start my-4">
                <div class="bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[85%] lg:max-w-2xl">
                    <p class="text-sm font-medium text-gray-500 mb-1">12 – 1:30pm</p>
                    <h3 class="text-lg font-bold text-gray-900 mb-3">Quarterly All Team Meeting</h3>
                    <div class="flex items-center -space-x-2">
                         <img class="w-6 h-6 rounded-full border-2 border-white" src="https://placehold.co/24x24/10B981/FFFFFF?text=Y" alt="You">
                         <img class="w-6 h-6 rounded-full border-2 border-white" src="https://placehold.co/24x24/60A5FA/FFFFFF?text=B" alt="Bill">
                         <img class="w-6 h-6 rounded-full border-2 border-white" src="https://placehold.co/24x24/F87171/FFFFFF?text=T" alt="Tim">
                         <img class="w-6 h-6 rounded-full border-2 border-white" src="https://placehold.co/24x24/FBBF24/FFFFFF?text=J" alt="John">
                    </div>
                </div>
            </div>

            <!-- DATE SEPARATOR 2 (Sticky) -->
            <div class="date-separator max-w-3xl mx-auto lg:px-0">
                <span class="text-xs font-semibold uppercase text-gray-400">16 FRIDAY</span>
            </div>

            <!-- SYSTEM MESSAGE 4 (Meeting Card 2) -->
            <div class="flex justify-start my-4">
                <div class="bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[85%] lg:max-w-2xl">
                    <p class="text-sm font-medium text-gray-500 mb-1">1 – 2pm</p>
                    <h3 class="text-lg font-bold text-gray-900 mb-3">Strategy Review</h3>
                    <div class="flex items-center -space-x-2">
                         <img class="w-6 h-6 rounded-full border-2 border-white" src="https://placehold.co/24x24/10B981/FFFFFF?text=Y" alt="You">
                         <img class="w-6 h-6 rounded-full border-2 border-white" src="https://placehold.co/24x24/F87171/FFFFFF?text=T" alt="Tim">
                         <img class="w-6 h-6 rounded-full border-2 border-white" src="https://placehold.co/24x24/4F46E5/FFFFFF?text=A" alt="Alice">
                    </div>
                </div>
            </div>

            <!-- SYSTEM MESSAGE 5 (Action prompt) -->
            <div class="flex justify-start mt-6 mb-12">
                <div class="bg-white p-4 rounded-xl shadow-sm text-gray-800 max-w-[85%] lg:max-w-2xl">
                    I can summarize these meetings, schedule a follow up, and more!
                </div>
            </div>

        </div>
    </main>

    <!-- FOOTER (FIXED INPUT BAR) -->
    <footer>
        <div class="max-w-3xl mx-auto">
            <!-- Input Container -->
            <div class="flex items-end bg-white border border-gray-300 rounded-3xl p-2 shadow-xl">
                
                <!-- Left Action Buttons -->
                <button class="flex items-center justify-center p-2 rounded-full text-gray-500 hover:bg-gray-100 transition">
                    <!-- Plus Icon -->
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                </button>

                <!-- Context Dropdown -->
                <div class="relative group ml-1 mr-2">
                    <button class="flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition">
                        All meetings
                        <!-- Chevron Down Icon -->
                        <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <!-- Dropdown Content (Mock) -->
                    <div class="absolute bottom-full left-0 mb-2 w-48 bg-white rounded-lg shadow-lg hidden group-focus-within:block group-hover:block border border-gray-200">
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Current thread</a>
                        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Custom context</a>
                    </div>
                </div>
                
                <!-- Textarea for input -->
                <textarea 
                    id="chat-input"
                    rows="1"
                    placeholder="Ask anything about your meetings..." 
                    class="flex-grow p-2 text-base text-gray-800 focus:outline-none border-none resize-none bg-white rounded-lg"
                    oninput="autoResize(this)"></textarea>

                <!-- Right Action Buttons -->
                <div class="flex items-center space-x-1 ml-auto">
                    <!-- Attachment/File Icon (Mock) -->
                    <button class="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition">
                         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.586a3 3 0 104.243 4.243l6.586-6.414"></path></svg>
                    </button>
                    <!-- Send/Mic Button -->
                    <button class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
                        <!-- Send Arrow Icon -->
                        <svg class="w-4 h-4 transform rotate-45 translate-x-px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                    </button>
                </div>
            </div>
             <!-- Disclaimer -->
            <p class="text-xs text-gray-400 text-center mt-3">
                This is a mock assistant interface. Contextual capabilities not active.
            </p>
        </div>
    </footer>
  </div>

</template>