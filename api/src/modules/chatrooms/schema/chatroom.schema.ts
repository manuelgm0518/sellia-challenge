import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Chatroom {}

export type ChatroomDocument = Chatroom & Document;
export const ChatroomSchema = SchemaFactory.createForClass(Chatroom);
