<template>
  <div class="bg-secondary overflow-auto h-min lg:h-full flex flex-row lg:flex-col gap-1 p-3">
    <UsersAvatar v-for="user in users.list" :user="user" />
  </div>
</template>

<script setup lang="ts">
import { User } from "~~/models/user";

const authentication = useAuthenticationStore();
const users = useUsersStore();
const { $socket } = useNuxtApp();

onMounted(() => {
  watch(
    () => authentication.loggedIn,
    (updated) => {
      if (updated) {
        $socket(authentication.authToken).on("connected_user", (user: User) => {
          users.updateUserConnection(user, true);
        });
        $socket(authentication.authToken).on("disconnected_user", (user: User) => {
          users.updateUserConnection(user, false);
        });
      }
    }
  );
});
</script>
