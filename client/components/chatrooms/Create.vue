<template>
  <div class="input-group">
    <input ref="nameInput" type="text" placeholder="Crear chatroom..." class="input w-full" />
    <button class="btn btn-square text-lg" @click="create">
      <i class="uil uil-comment-alt-plus"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
import { Chatroom } from "~~/models/chatroom";

const nameInput = ref<HTMLInputElement>(null);
const chatrooms = useChatroomsStore();

function create() {
  const name = nameInput.value.value;
  nameInput.value.value = "";

  chatrooms.chatrooms.push(new Chatroom(name, Math.floor(Math.random() * 100) + 1, new Date()));
}
</script>
