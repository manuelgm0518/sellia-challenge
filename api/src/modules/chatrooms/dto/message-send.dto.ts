import { IsMongoId, IsString } from 'class-validator';

export class MessageSendDto {
  @IsMongoId()
  authorId: string;

  @IsString()
  content: string;
}
