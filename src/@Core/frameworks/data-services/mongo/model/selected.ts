import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from './product-entity';
import mongoose, { HydratedDocument } from 'mongoose';


export type ClientDocument = HydratedDocument<Selected>;

@Schema()
export class Selected {
    @Prop()
    qtd: number;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    produto: Product;

}

export const SelectedSchema = SchemaFactory.createForClass(Selected);