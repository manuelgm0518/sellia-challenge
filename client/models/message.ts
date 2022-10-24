import { User } from "./user";

export class Message {
  id: string;
  constructor(public author: User, public content: string, public date: Date) {
    this.id = generateId();
  }

  get formattedDate(): string {
    const currentDate = new Date();
    const day = this.date.getDate();
    const currentDay = currentDate.getDate();
    const hour = this.date.toLocaleTimeString("es-MX", { timeStyle: "short", hour12: true });
    const weekdayName = this.date.toLocaleDateString("es-MX", { weekday: "long" });
    if (this.date.getFullYear() === currentDate.getFullYear() && this.date.getMonth() === currentDate.getMonth()) {
      if (day === currentDay) return hour;
      if (day === currentDay - 1) return "Ayer, " + hour;
      else if (day > currentDay - 7) return weekdayName[0].toUpperCase() + weekdayName.slice(1) + ", " + hour;
    }
    return this.date.toLocaleString("es-MX", { dateStyle: "short", timeStyle: "short", hour12: true });
  }
}

function generateId(): string {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 16; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}
