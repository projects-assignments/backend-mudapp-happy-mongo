import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor (@InjectModel('User') private readonly userModel: Model<User>){} 

 async createUser(createUserDto: CreateUserDto):Promise<User> {
  const userCreated = new this.userModel(createUserDto)  
    return await userCreated.save();
  }

  async findAll():Promise<User[]> {
    const allUsers = await this.userModel.find();
    console.log(allUsers);
    return allUsers;
  }

 async findOneUser(id: string): Promise<User> {
  const foundUser = await this.userModel.findById(id)  
  return foundUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async deleteUser(id: string):Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id);
    return deletedUser;
  }
}
