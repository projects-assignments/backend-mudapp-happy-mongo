import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;
@Schema()
export class Service {
  // @Prop({ unique: true, required: true })
  // serviceId: string;
  @Prop({ type: {} })
  userid: string;
  @Prop({ type: {} })
  driverid: string;
  @Prop({ required: true })
  priceService: number;
  @Prop({ required: true })
  pickupAddress: string;
  @Prop({ required: true })
  deliveryAddress: string;
  @Prop({ type: Date, default: Date.now, required: true })
  date: Date;
  @Prop({ required: true })
  passengers: number;
  @Prop({ type: {} })
  extraServices: {
    assistant: number;
    wheelbarrow: number;
  };
  @Prop({ type: {}, default: false })
  paymentStatus: {
    standBy: boolean;
    cancelled: boolean;
  };
  @Prop({ type: {}, default: false, required: true })
  statusServie: {
    confirmed: boolean;
    inProgress: boolean;
    cancelled: boolean;
    finalized: boolean;
  };
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
