import { IsMongoId, IsString } from 'class-validator';

export class MessageSendDto {
  @IsMongoId()
  userId: string;

  @IsString()
  content: string;
}
