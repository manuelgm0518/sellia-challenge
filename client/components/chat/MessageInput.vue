<template>
  <div class="flex items-center">
    <textarea
      ref="inputField"
      class="textarea resize-none flex-1 leading-5 text-base"
      placeholder="Mensaje..."
      @input="autoGrow"
    ></textarea>
    <div class="flex-none ml-3">
      <button class="btn btn-circle btn-primary" @click="send">
        <i class="uil uil-message text-xl"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const inputField = ref<HTMLInputElement>(null);

const emit = defineEmits<{
  (e: "send", text: string): void;
}>();

function send() {
  emit("send", inputField.value.value);
  inputField.value.value = "";
  autoGrow();
}
function autoGrow() {
  if (inputField.value.scrollHeight > 60) {
    inputField.value.style.height = "5px";
    inputField.value.style.height = inputField.value.scrollHeight + 5 + "px";
  }
}
</script>

<style scoped>
textarea {
  max-height: 12rem;
}
</style>
