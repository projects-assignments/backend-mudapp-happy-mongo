import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;
@Schema()
export class Message {
@Prop ({unique:true, required:true})
messageId: string;
@Prop ({required:true})
messageName: string;
@Prop ({required:true})
messageLastName: string;
@Prop ({required:true})
messageEmail: string;
@Prop ()
messageAvailable: boolean;
@Prop ()
vehicle: [{truck:boolean, capacity: string}, {van:boolean, capacity: string}, {car:boolean, capacity: string}]
@Prop ()
zones: [Barcelona:string]
@Prop ()
fees: [truck:boolean, van:boolean, car:boolean, xtras: {assistant: number, wheelbarrow: number}]
@Prop ()
collectMethods: {cardHolder: string, IBAN: string} 
@Prop ()
averageRating: number;
}


export const MessageSchema = SchemaFactory.createForClass(Message);