import { PickType } from '@nestjs/swagger';
import { IsValidPassword, MatchProperty } from 'src/shared/decorators';
import { User } from '../schema';

export class UserSignupDto extends PickType(User, ['username'] as const) {
  @IsValidPassword()
  password: string;

  @MatchProperty('password')
  confirmPassword: string;
}
