import { User } from "~~/models/user";

export const useAuthenticationStore = defineStore("AuthenticationStore", () => {
  const user = ref<InstanceType<typeof User>>(new User("manuelgm", false));

  const loggedIn = computed(() => user != null);

  function logIn(username: string, password: string) {
    user.value = new User(username, false);
  }

  function signUp(username: string, password: string) {
    user.value = new User(username, true);
  }

  return { user, loggedIn, logIn, signUp };
});
