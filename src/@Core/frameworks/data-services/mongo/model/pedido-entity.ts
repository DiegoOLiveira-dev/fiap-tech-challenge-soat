import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from './product-entity';

export type PedidoDocument = HydratedDocument<Pedido>;

@Schema()
export class Pedido {

    @Prop()
    descricao_status: string;

    @Prop()
    id_cliente: string;

    @Prop()
    nome_cliente: string;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }])
    produtos: Product[];

    @Prop()
    total: string;

    @Prop()
    id_status: string;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);