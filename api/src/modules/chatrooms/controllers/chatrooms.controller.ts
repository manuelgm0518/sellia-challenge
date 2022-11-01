import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { API_ENDPOINTS, HttpResponse } from 'src/core/constants';
import { Authenticated } from 'src/modules/users/decorators';
import { ChatroomCreateDto } from '../dto/chatroom-create.dto';
import { Chatroom, ChatroomDocument } from '../schema';
import { ChatroomsService } from '../services';

@ApiTags('Chatrooms')
@Controller(API_ENDPOINTS.CHATROOMS.BASE_PATH)
export class ChatroomsController {
  constructor(private readonly chatroomsService: ChatroomsService) {}

  @Post()
  @Authenticated()
  @ApiBody({ type: ChatroomCreateDto })
  @ApiResponse({ type: Chatroom })
  async create(@Body() body: ChatroomCreateDto): Promise<HttpResponse<ChatroomDocument>> {
    const data = await this.chatroomsService.create(body);
    return { data };
  }

  @Get()
  @ApiResponse({ type: Chatroom, isArray: true })
  async findAll(): Promise<HttpResponse<ChatroomDocument[]>> {
    const data = await this.chatroomsService.findAll();
    return { data };
  }
}
