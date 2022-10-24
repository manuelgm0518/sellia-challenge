<template>
  <div class="h-20 bg-base-200 px-5 flex items-center text-base-content">
    <div class="flex-1 mr-3">
      <span v-if="!showSearch" class="text-xl font-bold">
        {{ current.name }}
      </span>
      <div v-else>
        <input type="text" placeholder="Buscar…" class="input w-full" @input="search" />
      </div>
    </div>
    <button
      class="btn btn-ghost flex-none swap swap-rotate text-lg"
      :class="showSearch ? 'swap-active' : ''"
      @click="showSearch = !showSearch"
    >
      <i class="uil uil-times swap-on"></i>
      <i class="uil uil-search swap-off"></i>
    </button>
  </div>
</template>

<script setup lang="ts">
const showSearch = ref(false);
const { current } = useChatroomsStore();

const emit = defineEmits<{
  (e: "search", text: string): void;
}>();
function search(event: InputEvent) {
  const target = event.target as HTMLInputElement;
  emit("search", target.value);
}
</script>
