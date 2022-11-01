import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';

export class MessageSendDto {
  @ApiProperty()
  @IsMongoId()
  authorId: string;

  @ApiProperty()
  @IsMongoId()
  chatroomId: string;

  @ApiProperty()
  @IsString()
  content: string;
}
