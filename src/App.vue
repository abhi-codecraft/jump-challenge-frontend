<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import LoginLayout from "@/layouts/LoginLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Select layout dynamically based on route meta
const layout = computed(() => {
  return route.meta.layout === "login" ? LoginLayout : MainLayout;
});
</script>