import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;
@Schema()
export class Message {
    @Prop({ unique: true, required: true })
    messageId: string;
    @Prop({ required: true })
    userId: string;
    @Prop({ required: true })
    driverId: string;
    @Prop({ required: true })
    date: Date;
};

export const MessageSchema = SchemaFactory.createForClass(Message);