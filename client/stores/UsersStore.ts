import { User } from "~~/models/user";

export const useUsersStore = defineStore("UsersStore", () => {
  const config = useRuntimeConfig();
  const authentication = useAuthenticationStore();
  const list = ref<InstanceType<typeof User>[]>([]);

  const fetchUsers = async () => {
    try {
      const { data } = await $fetch<{ data: User[] }>(config.public.apiBase + "users", {
        headers: { Authorization: `Bearer ${authentication.authToken}` },
      });
      console.log(data);
      list.value = data;
      return data;
    } catch (error) {
      alert("No se pudieron obtener los usuarios");
      console.log(error);
    }
  };

  const updateUserConnection = async (user: User, connected: boolean) => {
    try {
      const index = list.value.findIndex((e) => e.id === user.id);
      list.value[index].connected = connected;
      console.log("updated");
    } catch (error) {
      console.log(error);
    }
  };

  watch(
    () => authentication.loggedIn,
    (updated) => {
      if (updated) fetchUsers();
    }
  );

  return { list, fetchUsers, updateUserConnection };
});
