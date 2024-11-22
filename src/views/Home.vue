<script setup>
import Hero from '@/components/Hero.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobList from '@/components/JobList.vue'
</script>

<template>
  <Hero title="Vue Jobs" subtitle="Find the Vue job that fits your skills and needs" />
  <HomeCards />
  <!-- with :, accept numbers, variables, dynamic data -->
  <JobList :limit="3" :showMore="true" />
</template>
