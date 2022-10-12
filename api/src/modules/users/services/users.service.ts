import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserCreateDto } from '../dto';
import { User, UserDocument } from '../schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(dto: UserCreateDto): Promise<UserDocument> {
    const user = new this.userModel(dto);
    console.log(dto);
    console.log(dto.username);
    return user.save();
  }

  async findAll(): Promise<UserDocument[]> {
    const users = this.userModel.find();
    return users;
  }
}
