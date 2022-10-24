<template>
  <div class="input-group" v-if="authentication.loggedIn">
    <input ref="nameInput" type="text" placeholder="Crear chatroom..." class="input w-full" v-model="roomName" />
    <button class="btn btn-square text-lg" :class="roomName.length < 1 ? 'btn-disabled' : ''" @click="create">
      <i class="uil uil-comment-alt-plus"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
const authentication = useAuthenticationStore();
const roomName = ref("");
const chatrooms = useChatroomsStore();

function create() {
  chatrooms.create(roomName.value);
  roomName.value = "";
}
</script>
