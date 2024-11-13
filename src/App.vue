<script setup>
//import HelloWorld from './components/HelloWorld.vue'
//import TheWelcome from './components/TheWelcome.vue'
import { getUsers, getUser, createUser, updateUser, deleteUser } from './api/UserService.js';

getUsers().then(result => {
  console.log(result.data)
})

</script>

<template>
  <h1>Plusoft - Frontend!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/users">Users</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
