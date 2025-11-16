<template>
     <main class="flex-1 p-6 lg:p-10">
            
            <h2 class="text-4xl font-bold text-gray-900 mb-8">Settings & Integrations</h2>

            <!-- Account Integrations (OAuth) -->
            <section class="mb-12 max-w-4xl">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Account Integrations (OAuth)</h3>
                
                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 space-y-4">
                    
                    <!-- Google Calendar Sync -->
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 border-b border-gray-100 last:border-b-0">
                        <div class="flex items-start space-x-3 mb-3 sm:mb-0">
                            <i class="fa-regular fa-calendar-days w-5 h-5 text-red-500 mt-1"></i>
                            <div>
                                <p class="text-lg font-medium text-gray-800">Google Calendar Sync</p>
                                <div class="text-sm text-gray-500 mt-1">
                                    <p>Connected Accounts:</p>
                                    <p class="font-semibold text-red-500">No Google Accounts connected.</p>
                                </div>
                            </div>
                        </div>
                        <button class="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition shadow-md">
                            Connect Account
                        </button>
                    </div>

                    <!-- LinkedIn Posting -->
                    <div class="flex justify-between items-center p-3 border-b border-gray-100 last:border-b-0">
                        <div class="flex items-center space-x-3">
                            <i class="fa-brands fa-linkedin w-5 h-5 text-blue-700"></i>
                            <p class="text-lg font-medium text-gray-800">LinkedIn Posting</p>
                        </div>
                        <span class="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                            Connected
                        </span>
                    </div>

                    <!-- Facebook Posting -->
                    <div class="flex justify-between items-center p-3 border-b border-gray-100 last:border-b-0">
                        <div class="flex items-center space-x-3">
                            <i class="fa-brands fa-facebook-f w-5 h-5 text-blue-600"></i>
                            <p class="text-lg font-medium text-gray-800">Facebook Posting</p>
                        </div>
                        <span class="px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                            Connected
                        </span>
                    </div>
                </div>
            </section>

            <!-- Notetaker Bot Configuration (Recall.ai) -->
            <section class="mb-12 max-w-4xl">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Notetaker Bot Configuration (Recall.ai)</h3>
                
                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <div class="flex justify-between items-center pb-4">
                        <label for="bot-time" class="text-lg font-medium text-gray-800">Bot Join Time (minutes before meeting)</label>
                        <input type="number" id="bot-time" value="5" class="w-20 text-center px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
                    </div>
                    <p class="text-sm text-gray-500 pt-2 border-t border-gray-100">
                        This determines how early the Recall.ai bot will join your Zoom/Meet/Teams meetings.
                    </p>
                </div>
            </section>

            <!-- Social Post Automations -->
            <section class="mb-12 max-w-4xl">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Social Post Automations</h3>
                
                <p class="text-gray-600 mb-6">Define the prompt style for AI-generated social media content.</p>

                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200 space-y-6">
                    
                    <!-- LinkedIn Automation -->
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <label for="linkedin-prompt" class="text-lg font-medium text-gray-800">
                                LinkedIn: <span class="text-sm text-gray-500">(linkedin-1)</span>
                            </label>
                            <button class="text-red-500 hover:text-red-700 text-sm font-medium">
                                <i class="fa-solid fa-trash-can w-4 h-4 mr-1"></i>
                                Delete
                            </button>
                        </div>
                        <textarea id="linkedin-prompt" rows="3" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 resize-none">Professional recap with actionable insights.</textarea>
                    </div>

                    <!-- Facebook Automation -->
                    <div>
                        <div class="flex justify-between items-center mb-2">
                            <label for="facebook-prompt" class="text-lg font-medium text-gray-800">
                                Facebook: <span class="text-sm text-gray-500">(facebook-1)</span>
                            </label>
                            <button class="text-red-500 hover:text-red-700 text-sm font-medium">
                                <i class="fa-solid fa-trash-can w-4 h-4 mr-1"></i>
                                Delete
                            </button>
                        </div>
                        <textarea id="facebook-prompt" rows="3" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 resize-none">Casual summary with a friendly tone.</textarea>
                    </div>

                    <!-- Add New Automation Button -->
                    <div class="pt-4 border-t border-gray-100">
                        <button class="flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition shadow-md">
                            <i class="fa-solid fa-plus w-4 h-4"></i>
                            <span>Add New Automation</span>
                        </button>
                    </div>
                    
                </div>
            </section>
        </main>
</template>