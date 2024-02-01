import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User extends Document {
  
  @Prop({ type: Object, default: false, required: true })
  role: {
    admin: boolean;
    user: boolean;
    driver: boolean;
  };
  @Prop({ required: true })
  userName: string;
  @Prop({ required: true })
  userLastName: string;
  @Prop({ type: Object, required: true })
  address: {
    street: string;
    streetNumber: number;
    city: string;
    postalCode: number;
  };
  @Prop({ unique: true, required: true })
  userEmail: string;
  @Prop()
  dni: string;
  @Prop({ required: true })
  userPassword: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
