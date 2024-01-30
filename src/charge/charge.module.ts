import { Module } from '@nestjs/common';
import { ChargeService } from './charge.service';
import { ChargeController } from './charge.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChargeSchema } from './schemas/charge.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'charge', schema: ChargeSchema }]),
  ],
  controllers: [ChargeController],
  providers: [ChargeService],
})
export class ChargeModule {}
