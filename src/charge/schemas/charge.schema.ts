import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';

export type ChargeDocument = HydratedDocument<Charge>;
@Schema()
export class Charge {
  @Prop({ unique: true, required: true })
  userId: string;
  @Prop({ type: Date, default: Date.now })
  chargeMethods: {
    cardHolder: string;
    cardNumber: number;
    expirationDate: Date;
    CVN: string;
  };
}

export const ChargeSchema = SchemaFactory.createForClass(Charge);
