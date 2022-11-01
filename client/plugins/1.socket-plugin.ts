import { io } from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      socket: (token: string) =>
        io("http://localhost:3001/api", {
          //withCredentials: true,
          extraHeaders: {
            authorization: token,
          },
        }),
    },
  };
});
