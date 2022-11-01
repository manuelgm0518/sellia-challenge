import { User } from "~~/models/user";

export interface AuthResponse {
  error?: any;
  data: {
    user: User;
    authToken: string;
  };
}
