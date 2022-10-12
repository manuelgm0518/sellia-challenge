import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { UsersController } from './controllers';
import { User, UserSchema } from './schema';
import { UsersService } from './services';
import { JwtStrategy, LocalStrategy } from './strategies';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'test', // process.env.JWT_SECRET,
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, LocalStrategy, JwtStrategy],
  exports: [MongooseModule, UsersService],
})
export class UsersModule {}
