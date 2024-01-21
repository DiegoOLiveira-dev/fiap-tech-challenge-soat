import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from './product-entity';
import mongoose, { HydratedDocument } from 'mongoose';
import { StatusPreparo } from './statuspreparo-entity';


export type ClientDocument = HydratedDocument<Selected>;

@Schema()
export class Selected {
    @Prop()
    qtd: number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    produto: Product;

}

@Schema()
export class SelectedStatusPedido {
    @Prop()
    date: string;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'statuspreparos' })
    status: StatusPreparo;

}

export const SelectedSchema = SchemaFactory.createForClass(Selected);