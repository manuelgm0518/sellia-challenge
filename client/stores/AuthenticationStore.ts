import { User } from "~~/models/user";

export const useAuthenticationStore = defineStore("AuthenticationStore", () => {
  const config = useRuntimeConfig();
  const user = ref<InstanceType<typeof User>>();

  const loggedIn = computed(() => user.value != null);

  const logIn = async (username: string, password: string) => {
    const { data: user } = await useFetch(config.public.apiBase + "login", {
      body: {
        username,
        password,
      },
    });
    console.log(user);
    //user.value = new User(datausername, false);
  };

  const signUp = async (username: string, password: string) => {
    const { data: user } = await useFetch(config.public.apiBase + "login", {
      body: {
        username,
        password,
        confirmPassword: password,
      },
    });
    console.log(user);
  };

  function logOut() {
    user.value = null;
  }

  return { user, loggedIn, logIn, signUp, logOut };
});
