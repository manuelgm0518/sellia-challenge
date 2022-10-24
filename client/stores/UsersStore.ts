import { Chatroom } from "~~/models/chatroom";
import { User } from "~~/models/user";

export const useUsersStore = defineStore("UsersStore", () => {
  const list = ref<InstanceType<typeof User>[]>([]);
  return { list };
});
