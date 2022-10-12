import { User } from '../schema';

export interface AuthTokenResponse {
  user: User;
  authToken: string;
}
