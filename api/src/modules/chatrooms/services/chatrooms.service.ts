import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Socket } from 'socket.io';
import { DecodedToken } from 'src/modules/users/interfaces';
import { UserDocument } from 'src/modules/users/schema';
import { UsersService } from 'src/modules/users/services';
import { MessageSendDto } from '../dto';
import { ChatroomCreateDto } from '../dto/chatroom-create.dto';
import { Chatroom, ChatroomDocument, Message, MessageDocument } from '../schema';

@Injectable()
export class ChatroomsService {
  constructor(
    @InjectModel(Chatroom.name)
    private readonly chatroomModel: Model<Chatroom>,
    @InjectModel(Message.name)
    private readonly messageModel: Model<Message>,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async create(dto: ChatroomCreateDto): Promise<ChatroomDocument> {
    const item = await this.chatroomModel.create(dto);
    return item;
  }

  async findAll(): Promise<ChatroomDocument[]> {
    const items = await this.chatroomModel.find().sort({ createdAt: 'descending' });
    return items;
  }

  async getUserFromSocket(socket: Socket): Promise<UserDocument> {
    try {
      const token = socket.handshake.headers.authorization;
      if (!token) throw new UnauthorizedException('You must be logged in to send messages');
      const payload: DecodedToken = this.jwtService.verify(token);
      const user = await this.usersService.findById(payload.userId);
      if (!user) throw new NotFoundException('The requested user does not exist');
      return user;
    } catch (e) {
      throw new ForbiddenException('Unauthorized user', e);
    }
  }

  async send(dto: MessageSendDto): Promise<MessageDocument> {
    const message = new this.messageModel({
      author: dto.authorId,
      content: dto.content,
    });
    return await message.save();
  }

  async saveMessage(dto: MessageSendDto): Promise<MessageDocument> {
    const newMessage = await this.messageModel.create(dto);
    return newMessage;
  }

  async findAllMessages(): Promise<MessageDocument[]> {
    const messages = await this.messageModel.find();
    return messages;
  }
}
