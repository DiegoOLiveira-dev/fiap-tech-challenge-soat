import { Injectable } from "@nestjs/common";
import { Pedido } from "../../domain/pedido";
import { PedidoPersistencePort } from "../../application/ports/out/pedido-persistente.port";
import { PedidoMapper } from "./pedido.mapper";
import { Product } from "src/@Core/products/domain/Products";
import { IDataServices } from "src/@Core/abstracts";

@Injectable()
export class PedidoPersistenceAdapter implements PedidoPersistencePort {
    constructor(private pedidoMapper: PedidoMapper, private dataServices: IDataServices) { }

    async getSelectedOrder(filter: any): Promise<Pedido[]> {
        return this.pedidoMapper.getSelectedOrder(filter)
    }


    updateStatus(body: any): Promise<any> {
        const id_pedido = body.id_pedido
        const new_status = body.newStatus

        return this.dataServices.pedido.patchById(id_pedido, new_status)

    }

    async getSelectedProduct(filter: any): Promise<Product[]> {
        return await this.pedidoMapper.getSelectedProduct(filter)
    }

    async persistPedido(pedido: Pedido) {
        return this.pedidoMapper.createPedido(pedido)
    }

    async getAllPedido(): Promise<Pedido[]> {
        return await this.pedidoMapper.getAllPedido()
    }




}