<template>
  <div :class="isSelected ? 'bg-white' : ''">
    <h1>{{ chatroom.name }}</h1>
    <h2>{{ isSelected }}</h2>
    <button @click="isSelected = !isSelected">asies</button>
  </div>
</template>

<script>
export default {
  props: {
    chatroom: Chatroom,
  },
};
</script>

<script setup>
import { Chatroom } from "~~/models/chatroom";

const isSelected = new useState("isSelected", () => false);
</script>
