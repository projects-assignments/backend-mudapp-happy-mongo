import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type MessageDocument = HydratedDocument<Message>;
@Schema()
export class Message {
  @Prop({ unique: true, required: true })
  service_id: string;
  @Prop({ type: Date, default: Date.now, required: true })
  message: {
    user_id: string; //emisor del mensaje
    date: Date;
    message: string;
  };
}

export const MessageSchema = SchemaFactory.createForClass(Message);

// export type ChatMessageDocument = ChatMessage & Document;

// @Schema()
// export class ChatMessage {
//     @Prop()
//     sender: string;

//     @Prop()
//     message: string;

//     @Prop({ type: Date, default: Date.now })
//     createdAt: Date;
// }
