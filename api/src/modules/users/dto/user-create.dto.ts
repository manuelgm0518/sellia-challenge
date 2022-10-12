import { PickType } from '@nestjs/swagger';
import { User } from '../schema';

export class UserCreateDto extends PickType(User, ['username'] as const) {}
