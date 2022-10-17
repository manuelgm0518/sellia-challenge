import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';
import { ChatroomsGateway } from './gateways';
import { Chatroom, ChatroomSchema, Message, MessageSchema } from './schema';
import { ChatroomsService } from './services';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([
      { name: Chatroom.name, schema: ChatroomSchema },
      { name: Message.name, schema: MessageSchema },
    ]),
  ],
  providers: [ChatroomsService, ChatroomsGateway],
  exports: [MongooseModule, ChatroomsService, ChatroomsGateway],
})
export class ChatroomsModule {}
