import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type PedidoDocument = HydratedDocument<Pedido>;

@Schema()
export class Pedido {
  @Prop({unique: true})
    id_pedido: string;

    @Prop()
    descricao_status: string;

    @Prop()
    id_cliente: string;

    @Prop()
    nome_cliente: string;

    @Prop()
    produtos: string;

    @Prop()
    total: string;

    @Prop()
    id_status: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Pedido'},)
    category: Pedido;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);