<template>
  <div class="modal modal-bottom sm:modal-middle" :class="show ? 'modal-open' : ''">
    <div class="modal-box gap-3 grid">
      <div class="flex">
        <span class="text-4xl font-semibold mb-4 flex-1"> {{ signUpMode ? "Registrarse" : "Iniciar sesión" }} </span>
        <button class="btn btn-circle btn-ghost flex-none" @click="close()">
          <i class="uil uil-times text-xl"></i>
        </button>
      </div>

      <label class="input-group">
        <span><i class="uil uil-user-circle text-xl"></i></span>
        <input type="text" placeholder="Nombre de usuario" class="input w-full bg-base-200" v-model="usernameText" />
      </label>

      <label class="input-group">
        <span><i class="uil uil-lock text-xl"></i></span>
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Contraseña"
          class="input w-full bg-base-200"
          v-model="passwordText"
        />
        <button class="btn btn-square" @click="showPassword = !showPassword">
          <i class="uil text-xl" :class="showPassword ? 'uil-eye' : 'uil-eye-slash'"></i>
        </button>
      </label>

      <div class="divider"></div>

      <div class="grid gap-3">
        <button
          class="btn btn-block btn-secondary gap-3"
          :class="{
            'order-last btn-ghost': signUpMode,
            'order-first': !signUpMode,
            'btn-disabled': !validated && !signUpMode,
          }"
          @click="signUpMode ? (signUpMode = false) : logIn()"
        >
          <i class="uil uil-signin text-xl"></i>
          Iniciar sesión
        </button>

        <button
          class="btn btn-block btn-secondary gap-3"
          :class="{
            'order-last btn-ghost': !signUpMode,
            'order-first': signUpMode,
            'btn-disabled': !validated && signUpMode,
          }"
          @click="!signUpMode ? (signUpMode = true) : signUp()"
        >
          <i class="uil uil-user-plus text-xl"></i>
          Registrarse
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const authentication = useAuthenticationStore();
const signUpMode = ref(false);
const showPassword = ref(false);

const props = defineProps<{
  show: boolean;
}>();
const emit = defineEmits<{
  (e: "update:show", value: boolean): void;
}>();
function close() {
  emit("update:show", false);
}

const usernameText = ref("");
const passwordText = ref("");
const validated = computed(() => {
  return usernameText.value.length > 0 && passwordText.value.length > 0;
});
function logIn() {
  authentication.logIn(usernameText.value, passwordText.value);
  close();
}
function signUp() {
  authentication.signUp(usernameText.value, passwordText.value);
  close();
}
</script>
