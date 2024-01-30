import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User extends Document {
    @Prop({ unique: true, default: Date.now })
    userId: string;
    @Prop({ type: {}, default: false, required: true })
    role: {
        admin: boolean,
        user: boolean,
        driver: boolean
    };
    // @Prop({ required: true })  posible solución mas minimalista
    // role: {
    //     driver: boolean
    // }
    @Prop({ required: true })
    userName: string;
    @Prop({ required: true })
    userLastName: string;
    @Prop({ type: {}, required: true })
    address: { street: string, streetNumber: number, city: string, postalCode: number }
    @Prop({ required: true })
    userEmail: string;
    @Prop()
    dni: string;
    @Prop({ required: true })
    userPassword: string;
}

export const UserSchema = SchemaFactory.createForClass(User);