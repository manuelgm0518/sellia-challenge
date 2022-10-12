import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { API_ENDPOINTS } from 'src/core/constants';
import { UserCreateDto } from '../dto';
import { UserDocument } from '../schema';
import { UsersService } from '../services/users.service';

@ApiTags('Users')
@Controller(API_ENDPOINTS.USERS.BASE_PATH)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UserCreateDto })
  async create(@Body() body: UserCreateDto): Promise<UserDocument> {
    const data = await this.usersService.create(body);
    return data;
  }

  @Get()
  async findAll(): Promise<UserDocument[]> {
    const data = await this.usersService.findAll();
    return data;
  }
}
