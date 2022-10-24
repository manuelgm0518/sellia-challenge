export class User {
  id: string;

  constructor(public username: string, public active: boolean, public color?: string) {
    this.id = generateId();
  }

  get initials(): string {
    const upper = this.username.toUpperCase();
    return upper[0] + upper[1];
  }
}

function generateId(): string {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 16; i++) result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return result;
}
