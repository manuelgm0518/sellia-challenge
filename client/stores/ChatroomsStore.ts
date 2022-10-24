import { Chatroom } from "~~/models/chatroom";

export const useChatroomsStore = defineStore("ChatroomsStore", () => {
  const router = useRouter();
  const list = ref<InstanceType<typeof Chatroom>[]>([]);

  const current = computed(() => {
    const id = router.currentRoute.value.params.id as string;
    if (id) {
      const current = list.value.find((e) => e.id === id);
      if (current) return current;
      router.replace("/");
    }
  });

  function create(name: string) {
    list.value.push(new Chatroom(name, 1, new Date()));
  }

  return { list, current, create };
});
