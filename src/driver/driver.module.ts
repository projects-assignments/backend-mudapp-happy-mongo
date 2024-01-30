import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DriverSchema } from './schemas/driver.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'driver', schema: DriverSchema }]),
  ],
  controllers: [DriverController],
  providers: [DriverService],
})
export class DriverModule {}
