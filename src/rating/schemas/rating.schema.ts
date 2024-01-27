import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RatingDocument = HydratedDocument<Rating>;
@Schema()
export class Rating {
    @Prop({ unique: true, required: true })
    serviceId: string;
    @Prop({ required: true })
    userId: string;
    @Prop({ required: true })
    driverId: string;
    @Prop({ type: Date, default: Date.now, required: true })
    rating: {
        rate: number,
        date: Date;
        message: string,
    };
};

export const RaSchema = SchemaFactory.createForClass(Rating);