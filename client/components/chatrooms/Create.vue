<template>
  <div class="input-group">
    <input ref="nameInput" type="text" placeholder="Crear chatroom..." class="input w-full" @input="checkName()" />
    <button class="btn btn-square text-lg" :class="!hasName ? 'btn-disabled' : ''" @click="create">
      <i class="uil uil-comment-alt-plus"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
const nameInput = ref<HTMLInputElement | null>(null);
const chatrooms = useChatroomsStore();
const hasName = ref(false);

function checkName() {
  hasName.value = nameInput.value.value.length > 0;
}
function create() {
  chatrooms.create(nameInput.value.value);
  nameInput.value.value = "";
}
</script>
