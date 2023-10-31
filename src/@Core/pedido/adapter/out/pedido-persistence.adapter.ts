import { Injectable } from "@nestjs/common";
import { Pedido } from "../../domain/pedido";
import { PedidoPersistencePort } from "../../application/ports/out/pedido-persistente.port";
import { PedidoMapper } from "./pedido.mapper";
import { Product } from "src/@Core/products/domain/Products";

@Injectable()
export class PedidoPersistenceAdapter implements PedidoPersistencePort {
    constructor(private pedidoMapper: PedidoMapper) { }
    
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