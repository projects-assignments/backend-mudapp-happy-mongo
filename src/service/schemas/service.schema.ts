import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;
@Schema()
export class Service {
@Prop ({unique:true, required:true})
serviceId: string;
@Prop ({unique:true, required:true})
userId: string;
@Prop ({unique:true, required:true})
driverId: string;
@Prop ({required:true})
serviceRate: number;
@Prop ({required:true})
pickupAddress: string;
@Prop ({required:true})
deliveryAddress: string;
@Prop ({required:true})
address: {street: string, streetNumber: number, city: string, postalCode: number}
@Prop ({required:true})
userEmail: string;
@Prop ()
dni: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);