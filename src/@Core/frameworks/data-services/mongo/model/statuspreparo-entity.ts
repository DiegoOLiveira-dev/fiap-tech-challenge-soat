import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StatusPreparoDocument = HydratedDocument<StatusPreparo>;

@Schema()
export class StatusPreparo {
    @Prop({ unique: true })
    id_status: string;
    descricao: string;
}

export const StatusPreparoSchema = SchemaFactory.createForClass(StatusPreparo);