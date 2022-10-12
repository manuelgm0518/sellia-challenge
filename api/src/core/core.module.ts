import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './services';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseService,
    }),
  ],
})
export class CoreModule {}
