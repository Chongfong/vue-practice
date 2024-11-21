<script setup>
import { defineProps } from 'vue'
defineProps({
  bgColor: {
    type: String,
    default: 'bg-gray-100',
  },
})
</script>

<template>
  <div :class="`${bgColor} p-6 rounded-lg shadow-md`">
    <!-- like {children} in React -->
    <slot></slot>
  </div>
</template>
