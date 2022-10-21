import { Chatroom } from "~~/models/chatroom";

export const useChatroomsStore = defineStore("ChatroomsStore", () => {
  const chatrooms = ref<Chatroom[]>([]);

  return { chatrooms };
});
