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

    @Prop({
        _id: { type: mongoose.Schema.Types.ObjectId },
        name: { type: mongoose.Schema.Types.ObjectId },
        description: { type: mongoose.Schema.Types.ObjectId },
        price: { type: mongoose.Schema.Types.ObjectId },
        image_url: { type: mongoose.Schema.Types.ObjectId },
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }
    })
    produtos: Product[];

    @Prop()
    total: string;

    @Prop()
    id_status: string;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);