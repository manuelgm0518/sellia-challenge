import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageSendDto } from '../dto';
import { Message, MessageDocument } from '../schema';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
  ) {}

  async sendMessage(dto: MessageSendDto): Promise<MessageDocument> {
    const message = await this.messageModel.create(dto);
    return message;
  }

  async findByChatroom(chatroomId: string, lastMessage: Date): Promise<MessageDocument[]> {
    const items = await this.messageModel
      .find({
        chatroom: chatroomId,
        createdAt: { $lt: lastMessage },
      })
      .limit(100)
      .sort({ createdAt: 'descending' });
    return items;
  }

  async searchMessages(chatroomId: string, query: string): Promise<MessageDocument[]> {
    const items = await this.messageModel.find({
      chatroom: chatroomId,
      content: { $regex: '.*' + query + '.*', $options: 'i' },
    });
    return items;
  }
}
