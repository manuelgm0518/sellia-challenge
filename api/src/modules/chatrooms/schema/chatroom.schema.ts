import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema({
  id: true,
  timestamps: true,
})
export class Chatroom {
  @ApiProperty({ description: "Chatroom's name" })
  @Prop()
  name: string;
}

export type ChatroomDocument = Chatroom & Document;
export const ChatroomSchema = SchemaFactory.createForClass(Chatroom);
