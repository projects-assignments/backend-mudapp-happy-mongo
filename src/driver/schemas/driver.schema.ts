import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type DriverDocument = HydratedDocument<Driver>;
@Schema()
export class Driver {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref:'User' })
  driverId: User;
  @Prop({ required: true })
  driverName: string;
  @Prop({ required: true })
  driverLastName: string;
  @Prop({ required: true })
  driverEmail: string;
  @Prop()
  driverAvailable: boolean;
  @Prop()
  vehicle: [
    { truck: boolean; capacity: string },
    { van: boolean; capacity: string },
    { car: boolean; capacity: string },
  ];
  @Prop()
  zones: [Barcelona: boolean];
  @Prop()
  fees: [
    truck: boolean,
    van: boolean,
    car: boolean,
    xtras: { assistant: number; wheelbarrow: number },
  ];
  @Prop({ type: String })
  collectMethods: { cardHolder: string; iban: string };
  @Prop()
  averageRating: number;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);
