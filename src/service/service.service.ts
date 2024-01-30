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

  create(createServiceDto: CreateServiceDto) {
    return 'This action adds a new service';
  }

  findAll() {
    return `This action returns all service`;
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
