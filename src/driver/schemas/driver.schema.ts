import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DriverDocument = HydratedDocument<Driver>;
@Schema()
export class Driver {
@Prop ({unique:true, required:true})
driverId: string;
@Prop ({required:true})
driverName: string;
@Prop ({required:true})
driverLastName: string;
@Prop ({required:true})
driverEmail: string;
@Prop ()
driverAvailable: boolean;
@Prop ()
vehicle: [truck:boolean, van:boolean, car:boolean]
@Prop ()
zones: [Barcelona:string]
@Prop ()
fees: [truck:boolean, van:boolean, car:boolean, xtras: {assistant: number, wheelbarrow: number}]
@Prop ()
paymentMethods: {cardHolder: string, IBAN: string} 
@Prop ()
averageRating: number;
}


export const DriverSchema = SchemaFactory.createForClass(Driver);