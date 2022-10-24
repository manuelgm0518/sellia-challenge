<template>
  <div class="h-full flex flex-col" style="min-width: 18rem">
    <div class="flex-none h-20 items-center flex p-3 bg-base-200 border-r-2 border-r-base-300">
      <ChatroomsCreate />
    </div>
    <div
      class="flex-1 divide-y divide-solid divide-base-300 overflow-auto overflow-x-hidden p-3"
      v-if="chatrooms.list.length > 0"
    >
      <ChatroomsTile v-for="chatroom in chatrooms.list" :chatroom="chatroom" />
    </div>
    <div v-else class="h-full w-full grid place-content-center">
      <span class="text-base-content">No hay ningún chatroom</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const chatrooms = useChatroomsStore();
</script>
