import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChatroomCreateDto } from '../dto/chatroom-create.dto';
import { Chatroom, ChatroomDocument } from '../schema';

@Injectable()
export class ChatroomsService {
  constructor(
    @InjectModel(Chatroom.name)
    private readonly chatroomModel: Model<Chatroom>,
  ) {}

  async create(dto: ChatroomCreateDto): Promise<ChatroomDocument> {
    const item = await this.chatroomModel.create(dto);
    return item;
  }

  async findAll(): Promise<ChatroomDocument[]> {
    const items = await this.chatroomModel.find().sort({ createdAt: 'descending' });
    return items;
  }
}
