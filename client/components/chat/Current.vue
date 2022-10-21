<template>
  <div class="flex flex-col h-full bg-base-300" v-if="chat">
    <div class="flex-none">
      <ChatSearchBar :name="chat.name" @search="search" />
    </div>
    <div ref="bubblesList" class="flex-1 h-full overflow-auto flex flex-col gap-3 p-5">
      <ChatMessageBubble v-for="message in chat.messages" :message="(message as Message)" class="flex-none" />
    </div>
    <div class="flex-none px-5 py-3">
      <ChatMessageInput @send="send" />
    </div>
  </div>
  <div v-else class="w-full h-full grid place-content-center">
    <progress class="progress w-56"></progress>
  </div>
</template>

<script setup lang="ts">
import { Chatroom } from "~~/models/chatroom";
import { Message } from "~~/models/message";
import { User } from "~~/models/user";

const route = useRoute();
const authentication = useAuthenticationStore();
const chatrooms = useChatroomsStore();
const bubblesList = ref<HTMLElement>(null);
const router = useRouter();

const chat = computed(() => {
  const id = route.params.id as string;
  const current = chatrooms.chatrooms.find((e) => e.id === id);
  if (!current) router.replace("/");
  return current as Chatroom;
});

function send(text: string) {
  chat.value.messages.push(new Message(authentication.user as User, text, new Date()));
  bubblesList.value.scrollTop = bubblesList.value.scrollHeight;
}

function search() {}
</script>
