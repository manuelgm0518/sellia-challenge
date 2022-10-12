import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageSendDto } from '../dto';
import { Message, MessageDocument } from '../schema/message.schema';

@Injectable()
export class MessagesService {
  constructor(@InjectModel(Message.name) private readonly messageModel: Model<Message>) {}

  async send(dto: MessageSendDto): Promise<MessageDocument> {
    const message = new this.messageModel({
      user: dto.userId,
      content: dto.content,
    });
    return message.save();
  }
}
