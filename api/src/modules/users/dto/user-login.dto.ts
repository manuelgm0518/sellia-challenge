import { PickType } from '@nestjs/swagger';
import { UserSignupDto } from './user-signup.dto';

export class UserLoginDto extends PickType(UserSignupDto, ['username', 'password']) {}
