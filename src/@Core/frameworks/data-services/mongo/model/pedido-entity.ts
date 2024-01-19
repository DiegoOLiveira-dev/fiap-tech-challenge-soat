import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Product } from './product-entity';
import { SelectedItemsProdutos } from 'src/@Core/pedido/domain/pedido';
import { Selected } from './selected';

export type PedidoDocument = HydratedDocument<Pedido>;

@Schema()
export class Pedido {

    @Prop()
    descricao_status: string;

    @Prop()
    id_cliente: string;

    @Prop()
    nome_cliente: string;

    @Prop()
    produtos: Selected[];

    @Prop()
    total: number;

    @Prop()
    id_status: string;

    @Prop()
    test: string;
}

export const PedidoSchema = SchemaFactory.createForClass(Pedido);