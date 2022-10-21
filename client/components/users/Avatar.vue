<template>
  <div class="avatar placeholder" :class="user.active ? 'online' : 'offline'">
    <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
      <span class="text-xl">{{ user.initials }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { User } from "~~/models/user";

const props = defineProps<{
  user: User;
}>();
</script>
