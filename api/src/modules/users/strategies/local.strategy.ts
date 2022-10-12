import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../services';
import { UserDocument } from '../schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({ usernameField: 'username' });
  }

  async validate(username: string, password: string): Promise<UserDocument> {
    const user = await this.usersService.validateUser(username, password);
    return user;
  }
}
