import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
@Prop ({unique:true, required:true})
userId: string;
@Prop ({required:true})
role: string;
@Prop ({required:true})
userName: string;
@Prop ({required:true})
userLastName: string;
@Prop ({required:true})
address: {street: string, streetNumber: number, city: string, postalCode: number}
@Prop ({required:true})
userEmail: string;
@Prop ()
dni: string;
@Prop ({required:true})
userPassword: string;
}


export const UserSchema = SchemaFactory.createForClass(User);