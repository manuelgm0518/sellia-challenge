<template>
  <div :class="isSelected ? 'bg-secondary' : ''">
    <h4>{{ chatroom.name }}</h4>
    <p>{{ isSelected }}</p>
    <button @click="isSelected = !isSelected">asies</button>
  </div>
</template>

<script setup lang="ts">
import { Chatroom } from "~~/models/chatroom";

const isSelected = ref(false);

const props = defineProps<{
  chatroom: Chatroom;
}>();
const emit = defineEmits<{
  (e: "select", chatroom: Chatroom): void;
}>();
</script>
