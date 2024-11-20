<script>
//Vue 2
// export default {
//   // data function, not object
//   data() {
//     return {
//       name: 'Donald Trump',
//       status: 'pending',
//       tasks: ['Task One', 'Task Two', 'Task Three'],
//       link: 'https://www.google.com',
//     }
//   },
//   // methods is an object
//   methods: {
//     toggleStatus() {
//       if (this.status === 'active') {
//         this.status = 'pending'
//       } else if (this.status === 'pending') {
//         this.status = 'active'
//       } else {
//         this.status = 'active'
//       }
//     },
//   },
// }

// composition api
export default {
  // setup function
  setup() {
    const name = 'Donald Trump'
    const status = 'pending'
    const tasks = ['Task One', 'Task Two', 'Task Three']
    const link = 'https://www.google.com'

    // this function is not active now
    const toggleStatus = () => {
      if (this.status === 'active') {
        this.status = 'pending'
      } else if (this.status === 'pending') {
        this.status = 'active'
      } else {
        this.status = 'active'
      }
    }

    // inside the setup function
    return {
      name,
      status,
      tasks,
      link,
      toggleStatus,
    }
  },
}
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User Is Active</p>
  <p v-else-if="status === 'pending'">User Is Pending</p>
  <p v-else>User Is Not Active</p>

  <h3>Tasks</h3>
  <ul>
    <li v-for="task in tasks" v-bind:key="task">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Click for Google</a> -->
  <a :href="link">Click for Google</a>
  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>
