<!-- use setup here -->
<script setup>
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

import { ref } from 'vue'

// composition api
// export default {
//   // setup function
//   setup() {
// use "ref" to wrap all reactive variables
const name = ref('Donald Trump')
const status = ref('pending')
const tasks = ref(['Task One', 'Task Two', 'Task Three']) // be careful for the ()
const link = ref('https://www.google.com')
const newTask = ref('')

//change to status.value
const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending'
  } else if (status.value === 'pending') {
    status.value = 'active'
  } else {
    status.value = 'active'
  }
}

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const deleteTask = (id) => {
  tasks.value.splice(id, 1)
  // or tasks.value = tasks.value.filter((task, index) => index !== id)
}

// no need to export and export with script setup

// inside the setup function
//     return {
//       name,
//       status,
//       tasks,
//       link,
//       toggleStatus,
//     }
//   },
// }
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User Is Active</p>
  <p v-else-if="status === 'pending'">User Is Pending</p>
  <p v-else>User Is Not Active</p>

  <!-- prevent default -->
  <form @submit.prevent="addTask">
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Add Task</button>
  </form>

  <h3>Tasks</h3>
  <ul>
    <!-- get index -->
    <li v-for="(task, index) in tasks" v-bind:key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">X</button>
    </li>
  </ul>
  <!-- <a v-bind:href="link">Click for Google</a> -->
  <a :href="link">Click for Google</a>
  <br />
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>
