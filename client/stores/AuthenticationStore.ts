import { AuthResponse } from "~~/dto/auth-response";
import { User } from "~~/models/user";

export const useAuthenticationStore = defineStore("AuthenticationStore", () => {
  const config = useRuntimeConfig();
  const user = ref<InstanceType<typeof User>>();

  const loggedIn = computed(() => user.value != null);

  const logIn = async (username: string, password: string) => {
    const { data } = await $fetch<AuthResponse>(config.public.apiBase + "users/login", {
      method: "POST",
      body: { username, password },
    });
    user.value = data.user;
  };

  const signUp = async (username: string, password: string) => {
    const { data } = await $fetch<AuthResponse>(config.public.apiBase + "users/signup", {
      method: "POST",
      body: { username, password, confirmPassword: password },
    });
    user.value = data.user;
  };

  function logOut() {
    user.value = null;
  }

  return { user, loggedIn, logIn, signUp, logOut };
});
