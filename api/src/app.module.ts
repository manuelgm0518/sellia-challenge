import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { ChatroomsModule } from './modules/chatrooms/chatrooms.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [CoreModule, UsersModule, ChatroomsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
