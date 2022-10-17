<template>
  <div class="basis-1/4 bg-blue-50 rounded-3xl my-5 divide-y">
    <div class="p-4">
      <p class="text-2xl">Lista de chats</p>
    </div>
    <div v-for="chatroom in chatrooms">
      <ChatroomTile :chatroom="chatroom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Chatroom } from "~~/models/chatroom";

const chatrooms = useState<Chatroom[]>("chatrooms", () => [
  {
    id: "1234",
    name: "Chatroom 1",
    participants: 777,
  },
  {
    id: "1234",
    name: "Chatroom 2",
    participants: 777,
  },
  {
    id: "1234",
    name: "Chatroom 3",
    participants: 777,
  },
  {
    id: "1234",
    name: "Chatroom 4",
    participants: 777,
  },
]);
</script>
