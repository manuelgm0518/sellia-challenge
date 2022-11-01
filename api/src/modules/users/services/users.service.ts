import { ForbiddenException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSignupDto } from '../dto';
import { AuthTokenResponse, DecodedToken } from '../interfaces';
import { User, UserDocument } from '../schema';
import * as bcrypt from 'bcrypt';
import { Socket } from 'socket.io';

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

  async updateConnection(userId: string, connected: boolean): Promise<UserDocument> {
    const user = await this.userModel.findOneAndUpdate({ id: userId }, { connected }, { new: true });
    return user;
  }

  // Authentication
  async getUserBySocket(socket: Socket): Promise<UserDocument> {
    try {
      const token = socket.handshake.headers.authorization;
      if (!token) throw new UnauthorizedException('You must be logged in to send messages');
      const payload: DecodedToken = this.jwtService.verify(token);
      const user = await this.findById(payload.userId);
      if (!user) throw new NotFoundException('The requested user does not exist');
      return user;
    } catch (e) {
      throw new ForbiddenException('Unauthorized user', e);
    }
  }

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
