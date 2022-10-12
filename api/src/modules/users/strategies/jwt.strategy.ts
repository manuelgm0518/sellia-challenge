import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../services';
import { UserDocument } from '../schema';
import { DecodedToken } from '../interfaces';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'test', //process.env.JWT_SECRET,
    });
  }

  async validate(payload: DecodedToken): Promise<UserDocument> {
    const user = await this.usersService.validateUserByToken(payload);
    return user;
  }
}
