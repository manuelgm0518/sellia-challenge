<template>
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

    <button class="btn gap-2 btn-active btn-primary" href="#log-in-form" v-if="authentication.loggedIn">
      <i class="uil uil-signout text-lg"></i>
      {{ authentication.user.username }}
    </button>

    <button class="btn gap-2 btn-active btn-primary" href="#log-in-form" v-else>
      <i class="uil uil-signin text-lg"></i>
      Ingresar
    </button>
  </div>
</template>

<script setup lang="ts">
const appTheme = useAppThemeStore();
const authentication = useAuthenticationStore();
</script>
