import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';
import { ServiceSchema } from './schemas/service.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Service', schema: ServiceSchema }])],
  controllers: [ServiceController],
  providers: [ServiceService],
  exports: [ServiceService],

})
export class ServiceModule { }
