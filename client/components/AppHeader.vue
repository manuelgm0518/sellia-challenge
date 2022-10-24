<template>
  <LogInForm v-model:show="showLogIn" />

  <div class="h-16 bg-primary flex items-center p-5">
    <div class="text-2xl font-medium text-primary-content">
      <h2><i class="uil uil-whatsapp mr-2"></i>WhatsApp 2</h2>
    </div>
    <button
      class="flex-none btn btn-square btn-primary text-lg ml-auto mr-2 swap swap-rotate"
      :class="appTheme.theme === AppThemes.DARK ? 'swap-active' : ''"
      @click="appTheme.swap()"
    >
      <i class="swap-on uil uil-moon"></i>
      <i class="swap-off uil uil-sun"></i>
    </button>
    <button class="btn gap-2 btn-active btn-primary" @click="showLogIn = !showLogIn">
      <i class="uil text-lg" :class="authentication.loggedIn ? 'uil-signout' : 'uil-signin'"></i>
      {{ authentication.loggedIn ? authentication.user.username : "Ingresar" }}
    </button>
  </div>
</template>

<script setup lang="ts">
const appTheme = useAppThemeStore();
const authentication = useAuthenticationStore();

const showLogIn = ref(false);
</script>
