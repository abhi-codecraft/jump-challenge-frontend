<template>
    <div class="flex flex-col lg:flex-row min-h-screen">
      <SideMenu />
      <router-view />
    </div>
  </template>
<script setup>
import SideMenu from '@/components/SideMenu.vue';
</script>