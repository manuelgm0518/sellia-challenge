<template>
  <div class="h-full bg-base-300 flex flex-col">
    <div class="flex-1 grow">
      <h1>Aki van los chats</h1>
    </div>
    <div class="flex-none p-5">
      <div class="flex items-center">
        <textarea
          ref="messageField"
          class="textarea resize-none grow leading-5 text-base"
          @input="autoGrow()"
          placeholder="Mensaje..."
        ></textarea>
        <button class="btn btn-primary flex-none ml-5">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const messageField = ref(null);
function autoGrow() {
  messageField.value.style.height = "5px";
  messageField.value.style.height = messageField.value.scrollHeight + 3 + "px";
}
</script>

<style>
textarea {
  max-height: 10rem;
}
</style>
