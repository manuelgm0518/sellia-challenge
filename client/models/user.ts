export class User {
  constructor(public id: string, public username: string, public active: boolean, public color?: string) {}

  get initials(): string {
    const upper = this.username.toUpperCase();
    return upper[0] + upper[1];
  }
}
