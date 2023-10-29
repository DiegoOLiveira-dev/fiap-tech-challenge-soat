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

    //@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' },) //para poder fazer essa referencia e ja trazer o produto aqui vc precisa ter o id do produto e terazer o objeto inteiro como esta no banco.
    produtos: Product[];

    @Prop()
    total: string;

    @Prop()
    id_status: string;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);