import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import mongoose,{ Model, ObjectId } from 'mongoose';
import { User } from './user_schema/user.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
@Injectable()
export class UserService {
  constructor(
    // @InjectConnection() private readonly connection: mongoose.Connection,
  @InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const userCreated = new this.userModel(createUserDto);
    return await userCreated.save();
  }

  async findAll(): Promise<User[]> {
    const allUsers = await this.userModel.find();
    console.log(allUsers);
    return allUsers;
  }
  //modificar nuestro authservice
  // async findOneByUserEmail(userEmail)

  async findOneUser(id: string): Promise<User> {
    const findUser = await this.userModel.findById(id);
    return findUser;
  }

  async updatePartiallyUser(
    id: string,
    createUserDto: CreateUserDto,
  ): Promise<User> {
    const updatedPartiallyUser = await this.userModel.findByIdAndUpdate(
      id,
      createUserDto,
    );
    return updatedPartiallyUser;
  }

  async updateUser(id: string, createUserDto: CreateUserDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      createUserDto,
    );
    return updatedUser;
  }

  async deleteUser(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    return deletedUser;
  }
}
