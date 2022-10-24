<template>
  <div class="modal modal-bottom sm:modal-middle" :class="show ? 'modal-open' : ''">
    <div class="modal-box gap-3 grid">
      <span class="text-4xl font-semibold mb-3"> {{ signUpMode ? "Registrarse" : "Iniciar sesión" }} </span>

      <label class="input-group">
        <span><i class="uil uil-user-circle text-xl"></i></span>
        <input type="text" placeholder="Nombre de usuario" class="input w-full bg-base-200" />
      </label>

      <label class="input-group">
        <span><i class="uil uil-lock text-xl"></i></span>
        <input type="text" placeholder="Contraseña" class="input w-full bg-base-200" />
      </label>

      <div class="divider"></div>

      <button class="btn btn-block btn-secondary gap-3" @click="close()">
        <i class="uil uil-signin text-xl"></i>
        Iniciar sesión
      </button>

      <button class="btn btn-block btn-secondary btn-ghost gap-3" @click="signUpMode = !signUpMode">
        <i class="uil uil-user-plus text-xl"></i>
        Registrarse
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const signUpMode = ref(false);

const props = defineProps<{
  show: boolean;
}>();
const emit = defineEmits<{
  (e: "update:show", value: boolean): void;
}>();
function close() {
  emit("update:show", false);
}
</script>
