<template>
  <main class="flex-1 p-6 lg:p-10">
            
            <!-- Back Link -->
            <a href="#" class="flex items-center space-x-2 text-indigo-600 font-semibold mb-6 hover:text-indigo-800 transition">
                <i class="fa-solid fa-arrow-left w-4 h-4"></i>
                <span>Back to Past Meetings</span>
            </a>

            <!-- Meeting Header -->
            <div class="mb-8">
                <h2 class="text-4xl font-bold text-gray-900 mb-2">Initial Consultation</h2>
                <p class="text-sm text-gray-500">11/13/2025, 11:41 PM | Microsoft Teams | Client C, Advisor</p>
            </div>

            <!-- Full Meeting Transcript -->
            <section class="mb-10">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Full Meeting Transcript</h3>
                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <p class="text-gray-700">
                        <span class="font-bold">Transcript for bot-456:</span> The client conversation was about the new investment plan. The advisor suggested a 60/40 stock-to-bond ratio. They agreed to review the proposal next week and confirmed they are very happy with the service. (Generated on 11:43:19 PM)
                    </p>
                </div>
            </section>

            <!-- AI-Generated Follow-up Email -->
            <section class="mb-10">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">AI-Generated Follow-up Email</h3>
                <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                    <!-- Placeholder for AI Draft Content -->
                    <div class="min-h-[100px] bg-gray-50 rounded-lg p-4 text-gray-500 flex items-center justify-center text-center italic">
                        AI Draft content could not be generated: API key missing.
                    </div>
                    <!-- Copy Button -->
                    <div class="mt-4 flex justify-end">
                        <button class="flex items-center space-x-2 px-4 py-2 bg-white text-gray-600 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition shadow-sm">
                            <i class="fa-solid fa-copy w-4 h-4"></i>
                            <span>Copy Email Draft</span>
                        </button>
                    </div>
                </div>
            </section>

            <!-- Social Media Post Drafts -->
            <section class="mb-10">
                <h3 class="text-2xl font-bold text-gray-900 mb-4">Social Media Post Drafts (2)</h3>
                <div class="space-y-4">
                    
                    <!-- LinkedIn Post Card -->
                    <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <div class="flex justify-between items-center mb-3">
                            <div class="flex items-center space-x-2 text-blue-700">
                                <i class="fa-brands fa-linkedin w-5 h-5"></i>
                                <span class="font-semibold">LinkedIn Post</span>
                            </div>
                            <span class="text-sm text-gray-400 italic">Style: Professional recap with actionable insights.</span>
                        </div>
                        
                        <!-- Placeholder for AI Draft Content -->
                        <div class="min-h-[60px] bg-gray-50 rounded-lg p-3 text-gray-500 flex items-center justify-center text-center italic">
                            AI Draft content could not be generated: API key missing.
                        </div>
                        
                        <!-- Actions -->
                        <div class="mt-3 flex space-x-2 justify-end">
                            <button class="px-3 py-1 bg-white text-gray-600 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition shadow-sm">
                                Copy
                            </button>
                            <button class="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition shadow-md">
                                Edit
                            </button>
                        </div>
                    </div>

                    <!-- Facebook Post Card -->
                    <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                        <div class="flex justify-between items-center mb-3">
                            <div class="flex items-center space-x-2 text-blue-600">
                                <i class="fa-brands fa-facebook-f w-5 h-5"></i>
                                <span class="font-semibold">Facebook Post</span>
                            </div>
                            <span class="text-sm text-gray-400 italic">Style: Casual summary with a friendly tone.</span>
                        </div>
                        
                        <!-- Placeholder for AI Draft Content -->
                        <div class="min-h-[60px] bg-gray-50 rounded-lg p-3 text-gray-500 flex items-center justify-center text-center italic">
                            AI Draft content could not be generated: API key missing.
                        </div>
                        
                        <!-- Actions -->
                        <div class="mt-3 flex space-x-2 justify-end">
                            <button class="px-3 py-1 bg-white text-gray-600 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition shadow-sm">
                                Copy
                            </button>
                            <button class="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition shadow-md">
                                Edit
                            </button>
                        </div>
                    </div>
                    
                </div>
            </section>
        </main>
</template>