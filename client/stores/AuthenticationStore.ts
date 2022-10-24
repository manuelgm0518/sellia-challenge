import { User } from "~~/models/user";

export const useAuthenticationStore = defineStore("AuthenticationStore", () => {
  const user = ref<InstanceType<typeof User>>();

  const loggedIn = computed(() => user.value != null);

  function logIn(username: string, password: string) {
    user.value = new User(username, false);
  }

  function signUp(username: string, password: string) {
    user.value = new User(username, true);
  }

  function logOut() {
    user.value = null;
  }

  return { user, loggedIn, logIn, signUp, logOut };
});
