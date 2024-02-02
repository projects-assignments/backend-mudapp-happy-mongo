import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User extends Document {
  @Prop({ type: Object, default: false })
  role: {
    admin: boolean;
    user: boolean;
    driver: boolean;
  };
  // @Prop({ required: true })  posible solución mas minimalista
  // role: {
  //     driver: boolean
  // }
  @Prop()
  userName: string;
  @Prop()
  userLastName: string;
  @Prop({type: Object})
  address: {
    street: string;
    streetNumber: number;
    city: string;
    postalCode: number;
  };
  @Prop()
  userEmail: string;
  @Prop()
  dni: string;
  @Prop()
  userPassword: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
