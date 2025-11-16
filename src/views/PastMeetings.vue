<template>
  <main class="flex-1 p-6 lg:p-10">
    <h2 class="text-4xl font-bold text-gray-900 mb-6">Past Meetings</h2>

    <!-- Meeting List -->
    <div class="space-y-4">

      <!-- ⚠️ EMPTY STATE -->
      <div
        v-if="meetings.length === 0"
        class="text-gray-500 text-center py-10 text-lg"
      >
        No past meetings found.
      </div>

      <!-- 📅 MEETINGS LIST -->
      <div
        v-else
        v-for="meeting in meetings"
        :key="meeting.id"
        class="bg-white rounded-xl shadow-lg p-5 flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-200"
      >
        <div class="flex items-start space-x-4 mb-4 md:mb-0">
          <!-- Initial Icon -->
          <div
            class="w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center bg-green-100 text-green-600 font-bold text-sm mt-1"
          >
            {{ meeting.title.charAt(0).toUpperCase() }}
          </div>

          <div>
            <p class="text-lg font-semibold text-gray-800">{{ meeting.title }}</p>

            <p class="text-sm text-gray-600">
              {{ formatMeetingDate(meeting.start_time) }} ({{ meeting.duration }} min)
            </p>

            <p class="text-xs text-gray-500 mt-1">
              Attendees:
              {{ Array.isArray(meeting.attendees) ? meeting.attendees.join(", ") : "—" }}
            </p>
          </div>
        </div>

        <!-- Status Indicator (Media Ready + Chevron) -->
                    <div class="flex items-center space-x-3 flex-shrink-0">
                        <span class="text-sm text-gray-400 font-normal">Media Ready</span>
                        <i class="fa-solid fa-chevron-right w-3 h-3 text-gray-400"></i>
                    </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import dayjs from "dayjs";
import { onMounted, ref } from "vue";
import axios from "../../axiosIntance.js";

// ---------------------- STATE ----------------------
const meetings = ref([]);

// ---------------------- LIFECYCLE ----------------------
onMounted(() => {
  fetchMeetings();
});

// ---------------------- METHODS ----------------------
const fetchMeetings = async () => {
  try {
    const res = await axios.get("/events/past");

    console.log(res);

    meetings.value = res.data.map((ev) => ({
      id: ev.id,
      title: ev.title,
      start_time: ev.start_time,
      end_time: ev.end_time,
      attendees: ev.attendees || [],
      duration: calculateDuration(ev.start_time, ev.end_time),
      notetakerEnabled: ev.notetaker || false,
    }));
  } catch (err) {
    console.error("Failed to load meetings:", err);
  }
};

const calculateDuration = (start, end) => {
  return dayjs(end).diff(dayjs(start), "minute");
};

const formatMeetingDate = (date) => {
  return dayjs(date).format("MMM DD, YYYY, hh:mm A");
};

const toggleNotetaker = (meeting) => {
  console.log("Toggled Notetaker:", meeting.id, meeting.notetakerEnabled);

  // Optional API call:
  // axios.post(`/events/${meeting.id}/toggle-notetaker`, {
  //   enabled: meeting.notetakerEnabled
  // });
};
</script>
