import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import mongoose, { Model, ObjectId } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Service } from './schemas/service.schema';
import { UserDocument } from 'src/user/schemas/user.schema';
// import { UserService } from 'src/user/user.service';
import { User } from 'src/user/schemas/user.schema';
import { Driver } from '../driver/schemas/driver.schema';

@Injectable()
export class ServiceService {
  constructor(
    @InjectConnection() private readonly connection: mongoose.Connection,
    @InjectModel('Service') private readonly serviceModel: Model<Service>,
    // @InjectModel(User.name) private readonly userModel: Model<User>,
    // @InjectModel(Driver.name) private readonly driverModel: Model<Driver>,
  ) { }

  async createService(createServiceDto: CreateServiceDto): Promise<Service> {
    const serviceCreated = new this.serviceModel(createServiceDto);
    return await serviceCreated.save();
  }

  // async createService(driverId: string, userId: string) {
  //   const transactionSession = await this.connection.startSession();
  //   try {
  //     transactionSession.startTransaction();
  //     //busco el usuario, esto se puede hacer importanto el findOneUser de user.service
  //     const user: UserDocument = await this.userModel.findById(userId);
  //     console.log(user);
  //     // busco el libro y actualizo el flag available
  //     const driver: Driver = await this.driverModel.findByIdAndUpdate(driverId,
  //       { driverAvilable: false });
  //     console.log(driver)
  //     if (driver.driverAvailable) {
  //       const service: Service = new Service();
  //       service.id = driver.id;
  //       service.driver = driver;

  //       user.services.push(service);
  //       const result = await user.save();
  //       transactionSession.commitTransaction();
  //       return result;
  //     } else {
  //       throw new Error('libro no disponible');
  //     }
  //   } catch (error) {
  //     transactionSession.abortTransaction();
  //     return { message: error.message };
  //   } finally {
  //     transactionSession.endSession();
  //   }
  //   // return user;
  // }




  async findAllServices(): Promise<Service[]> {
    const allServices = await this.serviceModel.find();
    console.log(allServices);
    return allServices;
  }

  async findOneService(email: string): Promise<Service> {
    const findService = await this.serviceModel.findById(email);
    return findService;
  }
  async updatePartiallyService(
    id: string,
    updatedServiceDto: UpdateServiceDto,
  ): Promise<Service> {
    const updatedPartiallyService = await this.serviceModel.findByIdAndUpdate(
      id,
      updatedServiceDto,
    );
    return updatedPartiallyService;
  }

  async updateService(id: string, createServiceDto: CreateServiceDto): Promise<Service> {
    const updatedService = await this.serviceModel.findByIdAndUpdate(
      id,
      createServiceDto,
    );
    return updatedService;
  }

  async deleteService(id: string): Promise<Service> {
    const deletedService = await this.serviceModel.findByIdAndDelete(id);
    return deletedService;
  }
}


