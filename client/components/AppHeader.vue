<template>
  <AuthenticationDialog v-model:show="showAuth" />
  <LogOutDialog v-model:show="showLogOut" />

  <div class="h-16 bg-primary flex items-center p-5">
    <div class="flex-none block md:hidden">
      <button
        class="btn btn-square text-white btn-ghost text-2xl swap swap-rotate"
        :class="showChatrooms ? 'swap-active' : ''"
        @click="showChatrooms = !showChatrooms"
      >
        <i class="uil uil-bars swap-off"></i>
        <i class="uil uil-times swap-on"></i>
      </button>
    </div>

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
    <button
      class="btn gap-2 btn-active btn-primary"
      @click="authentication.loggedIn ? (showLogOut = true) : (showAuth = true)"
    >
      <i class="uil text-lg" :class="authentication.loggedIn ? 'uil-signout' : 'uil-signin'"></i>
      {{ authentication.loggedIn ? authentication.user?.username : "Ingresar" }}
    </button>
  </div>
</template>

<script setup lang="ts">
const appTheme = useAppThemeStore();
const authentication = useAuthenticationStore();

const showAuth = ref(false);
const showLogOut = ref(false);
const showChatrooms = useState("showChatrooms", () => false);
</script>
