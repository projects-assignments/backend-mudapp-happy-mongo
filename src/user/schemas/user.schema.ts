import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { hash } from 'bcrypt';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User extends Document {
  
  @Prop()
  id: string;
  @Prop({ type: Object, default: false })
  role: {
    admin: boolean;
    user: boolean;
    driver: boolean;
  };
  @Prop()
  name: string;
  @Prop()
  lastName: string;
  @Prop({ type: Object })
  address: {
    street: string;
    streetNumber: number;
    city: string;
    postalCode: number;
  };
  @Prop({ unique: false })
  email: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function(next){
  try { if(!this.isModified('password')){
    return next();
  }
  const hashed = await hash(this.password, 10);
  this.password = hashed;
  return next();
}catch(error){
  return next(error)
}
});