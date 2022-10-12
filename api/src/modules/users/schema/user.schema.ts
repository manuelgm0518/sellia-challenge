import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Document } from 'mongoose';
import { IsString } from 'class-validator';
import { IsValidPassword } from 'src/shared/decorators';

@Schema({ timestamps: true })
export class User {
  @ApiProperty({ description: "User's access unique identifier" })
  @IsString()
  @Prop({ type: String, unique: true, required: true, trim: true, lowercase: true })
  username: string;

  @IsValidPassword()
  @Prop({ hide: true })
  password: string;

  // @ApiProperty({ description: "Date and time of the User's last connection" })
  // @Type(() => Date)
  // @Prop({ type: Date })
  // lastConnection: Date;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
