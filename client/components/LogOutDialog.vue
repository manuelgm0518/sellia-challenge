<template>
  <div class="modal modal-bottom sm:modal-middle" :class="show ? 'modal-open' : ''">
    <div class="modal-box gap-3 grid">
      <div class="flex">
        <span class="text-4xl font-semibold mb-4 flex-1"> ¿Estás seguro de cerrar sesión? </span>
        <button class="btn btn-circle btn-ghost flex-none" @click="close()">
          <i class="uil uil-times text-xl"></i>
        </button>
      </div>
      <button class="btn btn-secondary btn-block gap-3" @click="logOut()">
        <i class="uil uil-signout text-xl"></i>
        Cerrar sesión
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const authentication = useAuthenticationStore();

const props = defineProps<{
  show: boolean;
}>();
const emit = defineEmits<{
  (e: "update:show", value: boolean): void;
}>();
function close() {
  emit("update:show", false);
}

function logOut() {
  authentication.logOut();
  close();
}
</script>
