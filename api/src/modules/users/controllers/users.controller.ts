import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { API_ENDPOINTS, HttpResponse } from 'src/core/constants';
import { Authenticated, CurrentUser } from '../decorators';
import { UserLoginDto, UserSignupDto } from '../dto';
import { LocalAuthGuard } from '../guards';
import { AuthTokenResponse } from '../interfaces';
import { UserDocument } from '../schema';
import { UsersService } from '../services';

@ApiTags('Users')
@Controller(API_ENDPOINTS.USERS.BASE_PATH)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(API_ENDPOINTS.USERS.LOGIN)
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UserLoginDto })
  async logIn(@CurrentUser() currentUser: UserDocument): Promise<HttpResponse<AuthTokenResponse>> {
    const res = await this.usersService.logIn(currentUser);
    return { data: res };
  }

  @Post(API_ENDPOINTS.USERS.SIGNUP)
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: UserSignupDto })
  async signUp(@Body() dto: UserSignupDto): Promise<HttpResponse<AuthTokenResponse>> {
    const res = await this.usersService.signUp(dto);
    return { data: res };
  }

  @Get()
  @Authenticated()
  async findAll(): Promise<UserDocument[]> {
    const data = await this.usersService.findAll();
    return data;
  }
}
