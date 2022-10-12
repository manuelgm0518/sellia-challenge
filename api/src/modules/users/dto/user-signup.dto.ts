import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsValidPassword, MatchProperty } from 'src/shared/decorators';
import { User } from '../schema';

export class UserSignupDto extends PickType(User, ['username'] as const) {
  @ApiProperty({ description: 'Password required to log in' })
  @IsValidPassword()
  password: string;

  @ApiProperty({ description: 'Confirm that you typed the correct password' })
  @MatchProperty('password')
  confirmPassword: string;
}
