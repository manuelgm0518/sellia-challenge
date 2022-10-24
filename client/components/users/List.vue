<template>
  <div class="bg-secondary overflow-auto h-min lg:h-full flex flex-row lg:flex-col gap-1 p-3">
    <UsersAvatar v-for="user in users.list" :user="user" />
  </div>
</template>

<script setup lang="ts">
const users = useUsersStore();
</script>
