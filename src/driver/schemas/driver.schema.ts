import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type DriverDocument = HydratedDocument<Driver>;
@Schema()
export class Driver {
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref:'User' })
  // driverId: User;
  @Prop()
  driverId: string
  @Prop()
  driverName: string;
  @Prop()
  driverLastName: string;
  @Prop()
  driverEmail: string;
  @Prop()
  driverAvailable: boolean;
  @Prop()
  vehicle: [
    { truck: boolean; capacity: string },
    { van: boolean; capacity: string },
    { car: boolean; capacity: string },
  ];
  @Prop({ type: Object })
  zones: { Barcelona: boolean };
  @Prop({ type: Object })
  xtras: { assistant: number; wheelbarrow: number };
  @Prop({ type: Object })
  collectMethods: { cardHolder: string; iban: string };
  @Prop()
  averageRating: number;
}

export const DriverSchema = SchemaFactory.createForClass(Driver);
