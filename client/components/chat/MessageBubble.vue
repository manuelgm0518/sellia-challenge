<template>
  <div class="message-bubble grid" :class="isMine ? 'mine' : ''">
    <span v-if="!isMine" class="text-lg font-medium text-secondary">{{ message.author.username }}</span>
    <p class="leading-5">
      {{ message.content }}
    </p>
    <p class="text-xs place-self-end" :class="isMine ? 'text-secondary-content/[0.6]' : 'text-base-content/[0.6]'">
      {{ message.formattedDate }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Message } from "~~/models/message";

const authentication = useAuthenticationStore();

const props = defineProps<{
  message: Message;
}>();

const isMine = computed(() => {
  return Math.random() < 0.5;
  //return authentication.user?.id == props.message.author.id;
});
</script>

<style scoped>
@tailwind components;
@layer components {
  .message-bubble {
    @apply rounded-xl py-2 px-4 bg-base-100 place-self-start rounded-bl-none text-base-content whitespace-pre-wrap;
    min-width: 25%;
    max-width: 70%;
  }
  .message-bubble.mine {
    @apply rounded-xl bg-secondary-focus place-self-end rounded-br-none text-secondary-content;
  }
}
</style>
