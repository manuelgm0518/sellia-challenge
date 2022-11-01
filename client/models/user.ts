export class User {
  constructor(public id: string, public username: string, public connected: boolean) {}

  get initials(): string {
    const upper = this.username.toUpperCase();
    return upper[0] + upper[1];
  }

  static initials(name: string): string {
    const upper = name.toUpperCase();
    return upper[0] + upper[1];
  }
}
