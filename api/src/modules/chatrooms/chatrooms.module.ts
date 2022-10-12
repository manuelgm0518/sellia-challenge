import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Chatroom, ChatroomSchema, Message, MessageSchema } from './schema';
import { ChatroomsService, MessagesService } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Chatroom.name, schema: ChatroomSchema },
      { name: Message.name, schema: MessageSchema },
    ]),
  ],
  providers: [ChatroomsService, MessagesService],
  exports: [ChatroomsService, MessagesService],
})
export class ChatroomModule {}
