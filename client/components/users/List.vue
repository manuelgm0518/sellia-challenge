<template>
  <div class="bg-secondary overflow-auto h-min lg:h-full flex flex-row lg:flex-col gap-1 p-3">
    <UsersAvatar v-for="user in users" :user="user" />
  </div>
</template>

<script setup lang="ts">
import { User } from "~~/models/user";

const users: User[] = Array.from(
  { length: 30 },
  (_, i) => new User("usertest" + i, i % Math.round(Math.random()) == 0)
);
</script>
