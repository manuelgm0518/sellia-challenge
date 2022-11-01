import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Document } from 'mongoose';
import { User } from 'src/modules/users/schema';
import { MongoId } from 'src/shared/types';
import { Chatroom } from './chatroom.schema';

@Schema({ id: true, timestamps: true })
export class Message {
  @Prop({ type: MongoId, ref: User.name })
  @Type(() => User)
  author: User;

  @Prop({ type: MongoId, ref: Chatroom.name })
  @Type(() => Chatroom)
  chatroom: Chatroom;

  @ApiProperty({ description: 'The content of the message' })
  @Prop()
  content: string;
}

export type MessageDocument = Message & Document;
export const MessageSchema = SchemaFactory.createForClass(Message);
