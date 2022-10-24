<template>
  <div class="h-full">
    <div class="flex flex-col h-full bg-base-300" v-if="current">
      <div class="flex-none">
        <ChatSearchBar @search="search" />
      </div>
      <div ref="bubblesList" class="flex-1 h-full overflow-auto flex flex-col gap-3 p-5">
        <ChatMessageBubble v-for="message in current.messages" :message="message" class="flex-none" />
      </div>
      <div class="flex-none px-5 py-3">
        <ChatMessageInput @send="send" />
      </div>
    </div>
    <div class="w-full h-full grid place-content-center" v-else>
      <progress class="progress progress-primary w-56"></progress>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from "~~/models/message";

const authentication = useAuthenticationStore();
const bubblesList = ref<HTMLElement>(null);
const { current } = useChatroomsStore();

function send(text: string) {
  current.messages.push(new Message(authentication.user, text, new Date()));
  bubblesList.value.scrollTop = bubblesList.value.scrollHeight;
}

function search() {}
</script>
