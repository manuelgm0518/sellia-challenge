<template>
  <span :title="`${user.username}: ${user.connected ? 'online' : 'offline'}`">
    <div class="avatar placeholder" :class="user.connected ? 'online' : 'offline'">
      <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
        <span class="text-xl">{{ User.initials(user.username) }}</span>
      </div>
    </div>
  </span>
</template>

<script setup lang="ts">
import { User } from "~~/models/user";

const props = defineProps<{
  user: User;
}>();
</script>
