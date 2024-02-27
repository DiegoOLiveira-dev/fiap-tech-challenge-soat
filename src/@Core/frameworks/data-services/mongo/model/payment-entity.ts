import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PaymentDocument = HydratedDocument<Payment>;

@Schema()
export class Payment {
    @Prop()
    id_client: string;
    @Prop()
    id_order: string;
    @Prop()
    status_payment: string
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);