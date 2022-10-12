import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Document } from 'mongoose';

@Schema({})
export class User {
  @ApiProperty({ description: "User's access unique identifier" })
  @Prop({ unique: true })
  username: string;

  @ApiProperty({ description: "Date and time of the User's last connection" })
  @Type(() => Date)
  @Prop({ type: Date })
  lastConnection: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
