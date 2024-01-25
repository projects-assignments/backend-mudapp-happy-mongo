import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Date, HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;
@Schema()
export class Client {
@Prop ({unique:true, required:true})
clientId: string;
@Prop ({required:true})
clientName: string;
@Prop ({required:true})
clientLastName: string;
@Prop ({required:true})
address: {street: string, streetNumber: number, city: string, postalCode: number}
@Prop ({required:true})
clientEmail: string;
@Prop ()
paymentMethods: {cardHolder: string, cardNumber: number, expirationDate: Date, CVN: string}
}

export const ClientSchema = SchemaFactory.createForClass(Client);