import { PickType } from '@nestjs/swagger';
import { Chatroom } from '../schema';

export class ChatroomCreateDto extends PickType(Chatroom, ['name'] as const) {}
