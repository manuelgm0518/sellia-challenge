<template>
  <div class="flex flex-col h-screen w-screen">
    <div class="flex-none">
      <AppHeader />
    </div>

    <div class="flex-1 md:hidden" v-if="showChatrooms">
      <ChatroomsList class="flex-1" />
    </div>

    <div class="flex-1 flex flex-col lg:flex-row min-h-0 flex-nowrap" :class="showChatrooms ? 'hidden md:flex' : ''">
      <div class="flex-none">
        <UsersList />
      </div>
      <div class="flex grow min-h-0 flex-nowrap">
        <div class="flex-none hidden md:block">
          <ChatroomsList />
        </div>
        <div class="flex-1 bg-base-300">
          <NuxtPage />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const showChatrooms = useState("showChatrooms");
</script>

<style>
@import url("https://unicons.iconscout.com/release/v4.0.0/css/line.css");

::-webkit-scrollbar {
  width: 0.3rem;
  height: 0.3rem;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(96, 96, 96, 0.5);
  border-radius: 1rem;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(128, 128, 128, 0.5);
}
</style>
