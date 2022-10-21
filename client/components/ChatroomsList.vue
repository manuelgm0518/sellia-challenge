<template>
  <div class="prose bg-yellow-200 relative h-full w-20">
    <div class="absolute">
      <ChatroomTile v-for="chatroom in chatrooms" :chatroom="chatroom" />
    </div>

    <!-- <ChatroomTile v-for="chatroom in chatrooms" :chatroom="chatroom" /> -->
    <!-- <div class="divide-y divide-solid overflow-auto h-full bg-blue-200">
      <ChatroomTile v-for="chatroom in chatrooms" :chatroom="chatroom" />
    </div> -->
  </div>
</template>

<style scoped>
.testo {
  min-height: 0; /* without min-height/height:0 flex:1 doesn't work */
  flex: 1;
  overflow: auto;
}
</style>

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
