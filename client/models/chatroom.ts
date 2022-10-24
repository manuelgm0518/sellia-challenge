import { Message } from "./message";

export class Chatroom {
  id: string;
  messages: Message[] = [];
  constructor(public name: string, public participants: number, public createdAt?: Date) {
    this.id = generateId();
  }
}

function generateId(): string {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 16; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}
