import { User } from "~~/models/user";

export interface AuthResponse {
  data: {
    user: User;
    authToken: string;
  };
}
