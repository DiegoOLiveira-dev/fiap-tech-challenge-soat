import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { StatusPreparo } from './statuspreparo-entity';
import mongoose, { HydratedDocument } from 'mongoose';


export type ClientDocument = HydratedDocument<SelectedStatusPreparo>;

@Schema()
export class SelectedStatusPreparo {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'StatusPreparo' })
    produto: StatusPreparo;

}

export const SelectedStatusPreparoSchema = SchemaFactory.createForClass(SelectedStatusPreparo);