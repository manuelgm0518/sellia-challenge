import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { API_ENDPOINTS } from 'src/core/constants';
import { UserCreateDto } from '../dto';
import { UserDocument } from '../schema';
import { UsersService } from '../services/users.service';

@ApiTags('Users')
@Controller(API_ENDPOINTS.USERS.BASE_PATH)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() body: UserCreateDto): Promise<UserDocument> {
    const data = this.usersService.create(body);
    return data;
  }
}
