<template>
  <div class="py-2">
    <NuxtLink :to="'/' + chatroom.id">
      <div class="rounded-lg p-3 cursor-pointer" :class="isSelected ? 'bg-primary text-primary-content' : ''">
        <h4 class="text-lg font-medium leading-6">{{ chatroom.name }}</h4>
        <span class="text-sm">{{ chatroom.participants }} participante(s)</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Chatroom } from "~~/models/chatroom";
const route = useRoute();

const props = defineProps<{
  chatroom: Chatroom;
}>();

const isSelected = computed(() => {
  return route.params.id == props.chatroom.id;
});
</script>
