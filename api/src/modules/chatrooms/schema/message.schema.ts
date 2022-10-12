import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';
import { Document } from 'mongoose';
import { User } from 'src/modules/users/schema';
import { MongoId } from 'src/shared/types';

@Schema({ timestamps: true })
export class Message {
  @Prop({ type: MongoId, ref: User.name })
  @Type(() => User)
  sender: User;

  @ApiProperty({ description: 'The content of the message' })
  @Prop()
  content: string;
}

export type MessageDocument = Message & Document;
export const MessageSchema = SchemaFactory.createForClass(Message);
