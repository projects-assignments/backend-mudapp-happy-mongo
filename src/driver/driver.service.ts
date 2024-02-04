import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './schemas/driver.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DriverService {
  constructor(@InjectModel('Driver') private readonly driverModel: Model<Driver>) { }

  async createDriver(createDriverDto: CreateDriverDto): Promise<Driver> {
    const driverCreated = new this.driverModel(createDriverDto);
    return await driverCreated.save();
  }
  // create(createDriverDto: CreateDriverDto) {
  //   return 'This action adds a new driver';
  // }

  async findAllDriver(): Promise<Driver[]> {
    const allDriver = await this.driverModel.find();
    console.log(allDriver);
    return allDriver;
  }

  async findOneDriver(id: string): Promise<Driver> {
    const findOneDriver = await this.driverModel.findById(id);
    return findOneDriver
  }

  async updateDriver(
    id: string,
    updateDriverDto: UpdateDriverDto):
    Promise<Driver> {
    const updateDriver = await this.driverModel.findByIdAndUpdate(id, updateDriverDto);
    return updateDriver
  }

  async deleteDriver(id: string): Promise<Driver> {
    const deletedDriver = await this.driverModel.findByIdAndDelete(id);
    return deletedDriver;
  }



}
