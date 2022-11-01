import { AuthResponse } from "~~/dto/auth-response";
import { User } from "~~/models/user";

export const useAuthenticationStore = defineStore("AuthenticationStore", () => {
  const config = useRuntimeConfig();
  const user = ref<InstanceType<typeof User>>();
  const authToken = ref<string>(null);

  const loggedIn = computed(() => user.value != null);

  const logIn = async (username: string, password: string) => {
    try {
      const { data } = await $fetch<AuthResponse>(config.public.apiBase + "users/login", {
        method: "POST",
        body: { username, password },
      });
      authToken.value = data.authToken;
      user.value = data.user;
    } catch (error) {
      alert("Credenciales invalidas");
    }
  };

  const signUp = async (username: string, password: string) => {
    try {
      const { data } = await $fetch<AuthResponse>(config.public.apiBase + "users/signup", {
        method: "POST",
        body: { username, password, confirmPassword: password },
      });
      authToken.value = authToken.value;
      user.value = data.user;
    } catch (error) {
      alert("Este usuario ya se encuentra registrado");
    }
  };

  function logOut() {
    authToken.value = null;
    user.value = null;
  }

  return { user, loggedIn, logIn, signUp, logOut };
});
