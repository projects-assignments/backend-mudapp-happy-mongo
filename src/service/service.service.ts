import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Service } from './schemas/service.schema';

@Injectable()
export class ServiceService {
  constructor(@InjectModel('Service') private readonly serviceModel: Model<Service>) { }

  async createService(createServiceDto: CreateServiceDto): Promise<Service> {
    const serviceCreated = new this.serviceModel(createServiceDto);
    return await serviceCreated.save();
  }

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

