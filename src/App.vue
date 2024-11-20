<script>
//Vue 2
export default {
  // data function, not object
  data() {
    return {
      name: 'Donald Trump',
      status: 'pending',
    }
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User Is Active</p>
  <p v-else-if="status === 'pending'">User Is Pending</p>
  <p v-else>User Is Not Active</p>
</template>
