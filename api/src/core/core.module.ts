import { Global, Module, ValidationPipe } from '@nestjs/common';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpExceptionFilter } from './filters';
import { DatabaseService } from './services';

@Global()
@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_PIPE,
      useFactory: () => new ValidationPipe(),
    },
  ],
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseService,
    }),
  ],
})
export class CoreModule {}
