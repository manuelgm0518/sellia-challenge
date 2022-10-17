import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSignupDto } from '../dto';
import { AuthTokenResponse, DecodedToken } from '../interfaces';
import { User, UserDocument } from '../schema';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async findById(id: string): Promise<UserDocument> {
    const user = this.userModel.findById(id);
    return user;
  }

  async findAll(): Promise<UserDocument[]> {
    const users = this.userModel.find();
    return users;
  }

  // Authentication
  async validateUserByCredentials(username: string, password: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ username });
    if (!user) throw new NotFoundException('User not found');
    const isPasswordMatching = await bcrypt.compare(password, user.password);
    if (!isPasswordMatching) throw new UnauthorizedException('Invalid credentials');
    return user;
  }

  async validateUserByToken(payload: DecodedToken): Promise<UserDocument> {
    const user = await this.userModel.findOne({ id: payload.userId });
    if (!user) throw new NotFoundException('User not longer exists');
    return user;
  }

  async logIn(user: UserDocument): Promise<AuthTokenResponse> {
    const payload: DecodedToken = { userId: user.id };
    return {
      user,
      authToken: this.jwtService.sign(payload),
    };
  }

  async signUp(dto: UserSignupDto): Promise<AuthTokenResponse> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.userModel.create({
      username: dto.username,
      password: hashedPassword,
    });
    delete user.password;
    const payload: DecodedToken = { userId: user.id };
    return {
      user,
      authToken: this.jwtService.sign(payload),
    };
  }
}
