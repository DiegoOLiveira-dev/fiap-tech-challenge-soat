import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Selected, SelectedStatusPedido } from './selected';

export type PedidoDocument = HydratedDocument<Pedido>;

@Schema()
export class Pedido {

    @Prop()
    id_cliente: string;

    @Prop()
    nome_cliente: string;

    @Prop()
    produtos: Selected[];

    @Prop()
    status_pedido: SelectedStatusPedido[];

    @Prop()
    date_order: string;

    @Prop()
    total: number;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);